import { useParams } from "react-router-dom";
import { Divider, Alert } from "antd";
import { BackButton } from "../../components/BackButton";
import { GameImage } from "../../components/GameImage";
import { ScreenshotGallery } from "../../components/ScreenshotGallery";
import { PageTitle } from "../../components/PageTitle";
import { useDetailsPageStyles } from "./styles";
import { GameDescription } from "../../components/GameDescription";
import { GameMetaInfo } from "../../components/GameMetaInfo";
import { useGameDetails } from "../../hooks/useGameDetails";
import { ContentLoader } from "../../components/ContentLoader";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = id ? Number(id) : undefined;
  const styles = useDetailsPageStyles();

  const { game, screenshots, loading, error } = useGameDetails(numericId);
  const isEmpty = !game && !loading && !error;

  return (
    <div style={styles.container}>
      <BackButton />

      {error && (
        <Alert
          message="Ошибка"
          description={error}
          type="error"
          showIcon
          style={{ marginBottom: 24 }}
        />
      )}

      <ContentLoader loading={loading} isEmpty={isEmpty} fullscreen>
        {game && (
          <>
            <PageTitle level={1} isMain>
              {game.name}
            </PageTitle>

            <GameImage src={game.background_image} alt={game.name} />

            <div style={styles.metaBlock}>
              <GameMetaInfo game={game} />
            </div>

            <Divider style={styles.divider} />

            <PageTitle level={3}>Описание</PageTitle>
            <GameDescription description={game.description_raw} />

            <Divider style={styles.divider} />

            <PageTitle level={4}>Галерея</PageTitle>
            <ScreenshotGallery screenshots={screenshots} />
          </>
        )}
      </ContentLoader>
    </div>
  );
};

export default DetailsPage;
