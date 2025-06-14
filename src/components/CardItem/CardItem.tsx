import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  favoritesSelector,
  toggleFavoriteWithCleanup,
} from "../../app/slices/favorites/slice";
import { LikeButton } from "../LikeButton";
import { CardFooter } from "../CardFooter";
import { DeleteButton } from "../DeleteButton";
import { Game } from "../../utils/types";
import { useCardItemStyles } from "./styles";

const { Meta } = Card;
const { Text } = Typography;

type CardItemProps = {
  item: Game;
  isFavoriteView?: boolean;
  onDelete: (id: number) => void;
};

export const CardItem = ({
  item,
  isFavoriteView = false,
  onDelete,
}: CardItemProps) => {
  const dispatch = useAppDispatch();
  const styles = useCardItemStyles();
  const favorites = useAppSelector(favoritesSelector);
  const liked = favorites.includes(item.id);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(toggleFavoriteWithCleanup(item.id));
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onDelete(item.id);
  };

  return (
    <Link to={`/game/${item.id}`} style={{ textDecoration: "none" }}>
      <Card
        hoverable
        style={styles.card}
        cover={
          <img
            alt={item.name}
            src={item.background_image || "/placeholder.webp"}
            style={styles.cardImg}
            onError={e => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/placeholder.webp";
            }}
          />
        }
      >
        <DeleteButton onClick={handleDelete} style={styles.deleteIcon} />
        <LikeButton
          liked={liked}
          onClick={handleLikeToggle}
          style={styles.likeIcon(liked)}
        />

        <Meta
          title={
            <Text title={item.name} style={styles.cardTitle} ellipsis>
              {item.name}
            </Text>
          }
        />
        <CardFooter game={item} styles={styles} />
      </Card>
    </Link>
  );
};
