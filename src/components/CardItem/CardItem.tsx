import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  favoritesGamesSelector,
  toggleFavorite,
} from "../../app/slices/favorites/slice";
import { DeleteButton } from "../DeleteButton";
import { LikeButton } from "../LikeButton";
import { CardFooter } from "../CardFooter";
import { useCardItemStyles } from "./styles";
import { Game } from "../../utils/types";
import { usePublicPath } from "../../hooks/usePublicPath";

const { Meta } = Card;
const { Text } = Typography;

type CardItemProps = {
  item: Game;
  onDelete: (id: number) => void;
  showDelete?: boolean;
};

export const CardItem = ({
  item,
  onDelete,
  showDelete = true,
}: CardItemProps) => {
  const dispatch = useAppDispatch();
  const styles = useCardItemStyles();
  const favorites = useAppSelector(favoritesGamesSelector);
  const liked = favorites.some((game: Game) => game.id === item.id);
  const placeholderImage = usePublicPath("placeholder.webp");

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(toggleFavorite({ gameId: item.id, game: item }));
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onDelete(item.id);
  };

  return (
    <Link to={`/game/${item.id}`} style={styles.link}>
      <Card
        hoverable
        style={styles.card}
        cover={
          <div style={styles.coverWrapper}>
            <img
              alt={item.name}
              src={item.background_image || placeholderImage}
              style={styles.cardImg}
              className="card-image"
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/placeholder.webp";
              }}
            />
          </div>
        }
      >
        {showDelete && (
          <DeleteButton onClick={handleDelete} style={styles.deleteIcon} />
        )}
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
        <CardFooter game={item} />
      </Card>
    </Link>
  );
};
