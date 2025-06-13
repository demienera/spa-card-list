import { CalendarOutlined, TagsOutlined } from "@ant-design/icons";
import { Typography, Tag, Space } from "antd";
import { Game } from "../../utils/types";
import { formatDate, getRatingColor } from "../../utils/utils";

const { Text } = Typography;

type CardFooterProps = {
  game: Game;
  styles: any;
};

export const CardFooter = ({ game, styles }: CardFooterProps) => {
  const genres = game.genres.map(g => g.name).join(", ");
  return (
    <div style={styles.cardContent}>
      <Space>
        <Tag color={getRatingColor(game.rating)}>
          Рейтинг: {game.rating.toFixed(1)}
        </Tag>
      </Space>
      <div style={styles.cardGenreWrapper}>
        <TagsOutlined style={styles.cardTag} />
        <Text title={genres} style={styles.cardGenre}>
          {genres}
        </Text>
      </div>
      <div style={styles.cardDataWrapper}>
        <CalendarOutlined style={styles.cardDataIcon} />
        <Text>{formatDate(game.released)}</Text>
      </div>
    </div>
  );
};
