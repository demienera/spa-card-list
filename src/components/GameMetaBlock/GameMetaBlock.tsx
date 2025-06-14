import { Tag, Typography } from "antd";
import { useGameMetaBlockStyles } from "./styles";

const { Text } = Typography;

interface GameMetaBlockProps {
  label: string;
  items: string[];
  color?: string;
}

export const GameMetaBlock = ({ label, items, color }: GameMetaBlockProps) => {
  const styles = useGameMetaBlockStyles(color);

  if (!items?.length) return null;

  return (
    <div style={styles.container}>
      <Text strong style={styles.label}>
        {label}
      </Text>
      <div style={styles.tagWrapper}>
        {items.map((item, index) => (
          <Tag key={index} style={styles.tag}>
            {item}
          </Tag>
        ))}
      </div>
    </div>
  );
};
