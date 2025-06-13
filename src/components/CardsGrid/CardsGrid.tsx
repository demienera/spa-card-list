import { Row, Col, Empty } from "antd";
import { Game } from "../../utils/types";
import { CardItem } from "../CardItem";
import { useCardsGridStyles } from "./styles";

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
        <Empty description="В избранном пусто" />
      </Row>
    );
  }

  return (
    <Row gutter={[16, 24]}>
      {games.map(game => (
        <Col key={game.id} xs={24} sm={12} md={8} lg={6}>
          <CardItem
            item={game}
            isFavoriteView={isFavoriteView}
            onDelete={onDelete}
          />
        </Col>
      ))}
    </Row>
  );
};
