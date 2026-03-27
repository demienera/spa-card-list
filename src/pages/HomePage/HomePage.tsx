import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Row, Col, Statistic, Typography, Space } from "antd";
import {
  PlayCircleOutlined,
  HeartOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchGamesThunk,
  currentGamesSelector,
  totalGamesSelector,
} from "../../app/slices/games/slice";
import { favoritesGamesSelector } from "../../app/slices/favorites/slice";
import { CardsGrid } from "../../components/CardsGrid";
import { CreateGameModal } from "../../components/CreateGameModal";
import { usePublicPath } from "../../hooks/usePublicPath";
import { useHomePageStyles } from "./styles";
import { ContentLoader } from "../../components/ContentLoader";

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const styles = useHomePageStyles();
  const bgImage = usePublicPath("bg.jpg");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const currentGames = useAppSelector(currentGamesSelector);
  const totalGames = useAppSelector(totalGamesSelector);
  const favorites = useAppSelector(favoritesGamesSelector);

  useEffect(() => {
    if (currentGames.length === 0) {
      dispatch(fetchGamesThunk(1));
    }
  }, [dispatch, currentGames.length]);

  const featuredGames = currentGames.slice(0, 8);
  const favoritesCount = favorites.length;
  const hasFavorites = favoritesCount > 0;

  return (
    <div style={styles.container}>
      {/* Hero секция */}
      <div style={styles.heroSection(bgImage)}>
        <div style={styles.heroContent}>
          <Title level={1} style={styles.heroTitle}>
            Добро пожаловать в мир игр
          </Title>
          <Paragraph style={styles.heroSubtitle}>
            Исследуй каталог, добавляй в избранное и создавай свои игры
          </Paragraph>
          <Space size="large" style={styles.heroButtons}>
            <Button
              type="primary"
              size="large"
              icon={<PlayCircleOutlined />}
              onClick={() => navigate("/games")}
              style={styles.primaryButton}
            >
              Перейти в каталог
            </Button>
            {hasFavorites && (
              <Button
                size="large"
                icon={<HeartOutlined />}
                onClick={() =>
                  navigate("/games?view=favorites")
                }
                style={styles.secondaryButton}
              >
                Избранное ({favoritesCount})
              </Button>
            )}
          </Space>
        </div>
      </div>

      <div style={styles.statsSection}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={8}>
            <Card style={styles.statCard}>
              <Statistic
                title="Всего игр"
                value={totalGames}
                prefix={<PlayCircleOutlined />}
                valueStyle={{ color: "#a78bfa" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card style={styles.statCard}>
              <Statistic
                title="В избранном"
                value={favoritesCount}
                prefix={<HeartOutlined />}
                valueStyle={{ color: "#34d399" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card style={styles.statCard}>
              <Button
                type="primary"
                size="large"
                icon={<PlusOutlined />}
                onClick={() => setIsCreateModalOpen(true)}
                block
                style={styles.createButton}
              >
                Создать игру
              </Button>
            </Card>
          </Col>
        </Row>
      </div>

      <CreateGameModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      <div style={styles.gamesSection}>
        <div style={styles.sectionHeader}>
          <Title level={2} style={styles.sectionTitle}>
            Популярные игры
          </Title>
        </div>

        <ContentLoader loading={featuredGames.length === 0} isEmpty={false}>
          <CardsGrid
            games={featuredGames}
            onDelete={() => {}}
            isFavoriteView={false}
            showDelete={false}
          />
          {featuredGames.length > 0 && (
            <div style={styles.viewAllWrapper}>
              <Button
                type="primary"
                size="large"
                onClick={() => navigate("/games")}
                style={styles.viewAllButtonLarge}
              >
                Показать все игры
              </Button>
            </div>
          )}
        </ContentLoader>
      </div>
    </div>
  );
};

export default HomePage;
