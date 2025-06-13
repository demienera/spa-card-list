import { Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

type DeleteButtonProps = {
  onClick: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
};

export const DeleteButton = ({ onClick, style }: DeleteButtonProps) => (
  <Tooltip title="Удалить игру" placement="right">
    <div style={style} onClick={onClick}>
      <DeleteOutlined />
    </div>
  </Tooltip>
);
