import { Typography, Tag, Space } from "antd";
import { CalendarOutlined, TagsOutlined } from "@ant-design/icons";
import { useCardFooterStyles } from "./styles";
import { formatDate, getRatingColor } from "../../utils/utils";
import { Game } from "../../utils/types";

const { Text } = Typography;

type CardFooterProps = {
  game: Game;
};

export const CardFooter = ({ game }: CardFooterProps) => {
  const styles = useCardFooterStyles();
  const genres = game.genres.map(g => g.name).join(", ");
  const rating =
    typeof game.rating === "number" ? game.rating.toFixed(1) : "N/A";
  const ratingColor = getRatingColor(game.rating ?? 0);
  const releaseDate = game.released
    ? formatDate(game.released)
    : "Дата неизвестна";

  return (
    <div style={styles.cardContent}>
      <Space>
        <Tag color={ratingColor}>Рейтинг: {rating}</Tag>
      </Space>
      <div style={styles.cardGenreWrapper}>
        <TagsOutlined style={styles.cardTag} />
        <Text title={genres} style={styles.cardGenre}>
          {genres}
        </Text>
      </div>
      <div style={styles.cardDataWrapper}>
        <CalendarOutlined style={styles.cardDataIcon} />
        <Text>{releaseDate}</Text>
      </div>
    </div>
  );
};
