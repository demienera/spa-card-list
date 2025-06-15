import { Tooltip } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

type LikeButtonProps = {
  liked: boolean;
  onClick: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
};

export const LikeButton = ({ liked, onClick, style }: LikeButtonProps) => (
  <Tooltip
    title={liked ? "Убрать из избранного" : "Добавить в избранное"}
    placement="left"
  >
    <div onClick={onClick} style={style}>
      {liked ? <HeartFilled /> : <HeartOutlined />}
    </div>
  </Tooltip>
);
