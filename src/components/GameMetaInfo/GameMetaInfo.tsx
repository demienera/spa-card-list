// компонент GameMetaInfo.tsx
import { GameMetaBlock } from "../../components/GameMetaBlock";
import { GameMetaTextBlock } from "../../components/GameMetaTextBlock";
import { Game } from "../../utils/types";
import { useGameMetaInfoStyles } from "./styles";

interface GameMetaInfoProps {
  game?: Game;
}

export const GameMetaInfo = ({ game }: GameMetaInfoProps) => {
  const styles = useGameMetaInfoStyles();

  if (!game) {
    return null;
  }

  return (
    <div style={styles.container}>
      <GameMetaBlock
        label="Жанры:"
        items={game.genres?.map(g => g.name) || []}
      />
      <GameMetaBlock
        label="Платформы:"
        items={game.platforms?.map(p => p.platform.name) || []}
        color="#1890ff"
      />
      {game.developers?.length > 0 && (
        <GameMetaTextBlock
          label="Разработчики:"
          value={game.developers.map(dev => dev.name).join(", ")}
        />
      )}
    </div>
  );
};
