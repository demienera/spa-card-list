import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const styles = useCardItemStyles();
  const favorites = useAppSelector(favoritesSelector);
  const liked = favorites.includes(item.id);

  const handleCardClick = () => navigate(`/games/${item.slug}`);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleFavoriteWithCleanup(item.id));
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(item.id);
  };

  return (
    <Card
      hoverable
      onClick={handleCardClick}
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
  );
};
