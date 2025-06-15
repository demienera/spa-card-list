import { Row, Col, Empty } from "antd";
import { useCardsGridStyles } from "./styles";
import { CardItem } from "../CardItem";
import { Game } from "../../utils/types";

type Props = {
  games: Game[];
  isFavoriteView: boolean;
  onDelete: (id: number) => void;
};

export const CardsGrid = ({ games, isFavoriteView, onDelete }: Props) => {
  const styles = useCardsGridStyles();

  if (!games.length) {
    return (
      <Row style={styles.emptyWrapper}>
        <Empty description={isFavoriteView ? "В избранном пусто" : "Нет игр"} />
      </Row>
    );
  }

  return (
    <Row gutter={[16, 24]}>
      {games.map(game => (
        <Col key={game.id} xs={24} sm={12} md={8} lg={6}>
          <CardItem item={game} onDelete={onDelete} />
        </Col>
      ))}
    </Row>
  );
};
