import { Typography } from "antd";
import { useMetaTextBlockStyles } from "./styles";

const { Text } = Typography;

interface GameMetaTextBlockProps {
  label: string;
  value: string;
}

export const GameMetaTextBlock = ({ label, value }: GameMetaTextBlockProps) => {
  const styles = useMetaTextBlockStyles();

  if (!value) return null;

  return (
    <div style={styles.container}>
      <Text strong style={styles.label}>
        {label}
      </Text>
      <Text style={styles.text}>{value}</Text>
    </div>
  );
};
