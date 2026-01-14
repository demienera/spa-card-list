import { useParams } from "react-router-dom";
import {
  Alert,
  Row,
  Col,
  Card,
  Statistic,
  Progress,
  Space,
  Button,
  Tag,
} from "antd";
import {
  CalendarOutlined,
  StarFilled,
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
  GlobalOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { BackButton } from "../../components/BackButton";
import { ScreenshotGallery } from "../../components/ScreenshotGallery";
import { PageTitle } from "../../components/PageTitle";
import { useDetailsPageStyles } from "./styles";
import { GameDescription } from "../../components/GameDescription";
import { useGameDetails } from "../../hooks/useGameDetails";
import { ContentLoader } from "../../components/ContentLoader";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  toggleFavorite,
  favoritesSelector,
} from "../../app/slices/favorites/slice";
import { formatDate, getRatingColor } from "../../utils/utils";
import { usePublicPath } from "../../hooks/usePublicPath";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = id ? Number(id) : undefined;
  const styles = useDetailsPageStyles();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(favoritesSelector);
  const placeholderImage = usePublicPath("placeholder.webp");

  const { game, screenshots, loading, error } = useGameDetails(numericId);
  const isEmpty = !game && !loading && !error;
  const isFavorite = game ? favorites.includes(game.id) : false;

  const handleToggleFavorite = () => {
    if (game) {
      dispatch(toggleFavorite({ gameId: game.id, game }));
    }
  };

  const handleShare = async () => {
    if (navigator.share && game) {
      try {
        await navigator.share({
          title: game.name,
          text: `Посмотри на игру ${game.name}`,
          url: window.location.href,
        });
      } catch (err) {
        // Пользователь отменил шаринг
      }
    } else {
      // Fallback - копируем в буфер обмена
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const rating = game?.rating ? game.rating : 0;
  const ratingPercent = (rating / 5) * 100;
  const ratingColor = getRatingColor(rating);

  return (
    <div style={styles.container}>
      <BackButton />

      {error && (
        <Alert
          message="Ошибка"
          description={error}
          type="error"
          showIcon
          style={styles.errorAlert}
        />
      )}

      <ContentLoader loading={loading} isEmpty={isEmpty} fullscreen>
        {game && (
          <>
            <div style={styles.heroSection}>
              <div style={styles.heroImage} className="hero-image-wrapper">
                <img
                  src={game.background_image || placeholderImage}
                  alt={game.name}
                  style={styles.heroImageBg}
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = placeholderImage;
                  }}
                />
                <div style={styles.heroOverlay} />
              </div>
              <div style={styles.heroContent}>
                <PageTitle level={1} style={styles.heroTitle}>
                  {game.name}
                </PageTitle>
                <Space size="large" style={styles.heroActions}>
                  <Button
                    type={isFavorite ? "primary" : "default"}
                    icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
                    onClick={handleToggleFavorite}
                    size="large"
                  >
                    {isFavorite ? "В избранном" : "В избранное"}
                  </Button>
                  <Button
                    icon={<ShareAltOutlined />}
                    onClick={handleShare}
                    size="large"
                  >
                    Поделиться
                  </Button>
                </Space>
              </div>
            </div>

            <Row gutter={[32, 32]} style={styles.contentRow}>
              <Col xs={24} lg={16}>
                <Card style={styles.contentCard} className="details-page-card">
                  <PageTitle level={3} style={styles.sectionTitle}>
                    Описание
                  </PageTitle>
                  <GameDescription description={game.description_raw} />
                </Card>

                {screenshots && screenshots.length > 0 && (
                  <Card
                    style={styles.contentCard}
                    className="details-page-card"
                  >
                    <PageTitle level={3} style={styles.sectionTitle}>
                      Галерея
                    </PageTitle>
                    <ScreenshotGallery screenshots={screenshots} />
                  </Card>
                )}
              </Col>

              <Col xs={24} lg={8}>
                <div style={styles.sidebar}>
                  <Card
                    style={styles.sidebarCard}
                    className="details-page-card"
                  >
                    <Statistic
                      title="Рейтинг"
                      value={rating.toFixed(1)}
                      prefix={
                        <StarFilled style={styles.ratingIcon(ratingColor)} />
                      }
                      valueStyle={styles.ratingValue(ratingColor)}
                    />
                    <Progress
                      percent={ratingPercent}
                      strokeColor={ratingColor}
                      showInfo={false}
                      style={styles.ratingProgress}
                    />
                  </Card>

                  <Card
                    style={styles.sidebarCard}
                    className="details-page-card"
                  >
                    <Space
                      direction="vertical"
                      size="middle"
                      style={styles.infoSpace}
                    >
                      {game.released && (
                        <div style={styles.infoItem}>
                          <div style={styles.infoHeader}>
                            <CalendarOutlined style={styles.infoIcon} />
                            <div style={styles.infoLabel}>Дата релиза</div>
                          </div>
                          <div style={styles.infoValue}>
                            {formatDate(game.released)}
                          </div>
                        </div>
                      )}

                      {game.genres && game.genres.length > 0 && (
                        <div style={styles.infoItem}>
                          <div style={styles.infoLabel}>Жанры</div>
                          <Space wrap style={styles.tagsSpace}>
                            {game.genres.map((genre, index) => (
                              <Tag key={index} style={styles.genreTag}>
                                {genre.name}
                              </Tag>
                            ))}
                          </Space>
                        </div>
                      )}

                      {game.platforms && game.platforms.length > 0 && (
                        <div style={styles.infoItem}>
                          <div style={styles.infoLabel}>Платформы</div>
                          <Space wrap style={styles.tagsSpace}>
                            {game.platforms.map((platform, index) => (
                              <Tag key={index} style={styles.platformTag}>
                                {platform.platform.name}
                              </Tag>
                            ))}
                          </Space>
                        </div>
                      )}

                      {game.developers && game.developers.length > 0 && (
                        <div style={styles.infoItem}>
                          <div style={styles.infoLabel}>Разработчики</div>
                          <div style={styles.infoValue}>
                            {game.developers.map(dev => dev.name).join(", ")}
                          </div>
                        </div>
                      )}

                      {game.publishers && game.publishers.length > 0 && (
                        <div style={styles.infoItem}>
                          <div style={styles.infoLabel}>Издатели</div>
                          <div style={styles.infoValue}>
                            {game.publishers.map(pub => pub.name).join(", ")}
                          </div>
                        </div>
                      )}

                      {game.playtime && (
                        <div style={styles.infoItem}>
                          <div style={styles.infoHeader}>
                            <ClockCircleOutlined style={styles.infoIcon} />
                            <div style={styles.infoLabel}>
                              Среднее время игры
                            </div>
                          </div>
                          <div style={styles.infoValue}>
                            {game.playtime}{" "}
                            {game.playtime === 1
                              ? "час"
                              : game.playtime < 5
                                ? "часа"
                                : "часов"}
                          </div>
                        </div>
                      )}

                      {game.metacritic && (
                        <div style={styles.infoItem}>
                          <div style={styles.infoHeader}>
                            <TrophyOutlined style={styles.infoIcon} />
                            <div style={styles.infoLabel}>Metacritic</div>
                          </div>
                          <div style={styles.infoValue}>
                            <Tag
                              color={
                                game.metacritic >= 75
                                  ? "green"
                                  : game.metacritic >= 50
                                    ? "orange"
                                    : "red"
                              }
                              style={styles.metacriticTag}
                            >
                              {game.metacritic}
                            </Tag>
                          </div>
                        </div>
                      )}

                      {game.esrb_rating && (
                        <div style={styles.infoItem}>
                          <div style={styles.infoLabel}>Возрастной рейтинг</div>
                          <div style={styles.infoValue}>
                            <Tag style={styles.ageTag}>
                              {game.esrb_rating.name}
                            </Tag>
                          </div>
                        </div>
                      )}

                      {game.reviews_count !== undefined &&
                        game.reviews_count > 0 && (
                          <div style={styles.infoItem}>
                            <div style={styles.infoHeader}>
                              <MessageOutlined style={styles.infoIcon} />
                              <div style={styles.infoLabel}>Отзывы</div>
                            </div>
                            <div style={styles.infoValue}>
                              {game.reviews_count.toLocaleString()}{" "}
                              {game.reviews_count === 1
                                ? "отзыв"
                                : game.reviews_count < 5
                                  ? "отзыва"
                                  : "отзывов"}
                            </div>
                          </div>
                        )}

                      {game.website && (
                        <div style={styles.infoItem}>
                          <div style={styles.infoHeader}>
                            <GlobalOutlined style={styles.infoIcon} />
                            <div style={styles.infoLabel}>Официальный сайт</div>
                          </div>
                          <a
                            href={game.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.websiteLink}
                          >
                            Перейти на сайт
                          </a>
                        </div>
                      )}
                    </Space>
                  </Card>
                </div>
              </Col>
            </Row>
          </>
        )}
      </ContentLoader>
    </div>
  );
};

export default DetailsPage;
