import { CSSProperties, ReactNode } from "react";
import { Typography } from "antd";
import { useImagePlaceholderStyles } from "./styles";

const { Text } = Typography;

interface ImagePlaceholderProps {
  text?: ReactNode;
  style?: CSSProperties;
  textStyle?: CSSProperties;
  icon?: ReactNode;
}

export const ImagePlaceholder = ({
  text = "Нет изображения",
  style,
  textStyle,
  icon,
}: ImagePlaceholderProps) => {
  const styles = useImagePlaceholderStyles();
  return (
    <div style={styles.container(style)}>
      {icon}
      <Text style={styles.text(icon, textStyle)}>{text}</Text>
    </div>
  );
};
