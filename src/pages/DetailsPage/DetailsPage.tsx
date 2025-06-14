import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Divider, Typography, Spin } from "antd";
import { getGameByIdApi, getGameScreenshotsApi } from "../../utils/api";
import { BackButton } from "../../components/BackButton";
import { GameImage } from "../../components/GameImage";
import { GameMetaBlock } from "../../components/GameMetaBlock";
import { ScreenshotGallery } from "../../components/ScreenshotGallery";
import { GameMetaTextBlock } from "../../components/GameMetaTextBlock";
import { PageTitle } from "../../components/PageTitle";
import { Game } from "../../utils/types";
import { useDetailsPageStyles } from "./styles";

const { Paragraph } = Typography;

export const DetailsPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [screenshots, setScreenshots] = useState<string[]>([]);
  const styles = useDetailsPageStyles();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const [gameData, screenshotsData] = await Promise.all([
          getGameByIdApi(+id),
          getGameScreenshotsApi(+id),
        ]);
        setGame(gameData);
        setScreenshots(screenshotsData);
      } catch {
        setGame(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div style={styles.spinner}>
        <Spin size="large" />
      </div>
    );
  }

  if (!game) {
    return (
      <div style={styles.notFound}>
        <BackButton />
        <PageTitle level={3}>Игра не найдена</PageTitle>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <BackButton />

      <PageTitle level={1} isMain>
        {game.name}
      </PageTitle>

      <GameImage src={game.background_image} alt={game.name} />

      <div style={styles.metaBlock}>
        <GameMetaBlock label="Жанры:" items={game.genres.map(g => g.name)} />
        <GameMetaBlock
          label="Платформы:"
          items={game.platforms.map(p => p.platform.name)}
          color="#1890ff"
        />

        {game.developers?.length > 0 && (
          <GameMetaTextBlock
            label="Разработчики:"
            value={game.developers.map(dev => dev.name).join(", ")}
          />
        )}
      </div>

      <Divider style={styles.divider} />

      <PageTitle level={3}>Описание</PageTitle>
      {game.description_raw.split("\n").map((text, index) => (
        <Paragraph key={index} style={styles.text}>
          {text}
        </Paragraph>
      ))}

      <Divider style={styles.divider} />

      <PageTitle level={4}>Галерея</PageTitle>
      <ScreenshotGallery screenshots={screenshots} />
    </div>
  );
};
