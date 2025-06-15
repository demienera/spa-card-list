import { Typography } from "antd";
import { useGameDescriptionStyles } from "./styles";

const { Paragraph } = Typography;

interface GameDescriptionProps {
  description?: string;
}

export const GameDescription = ({ description }: GameDescriptionProps) => {
  const styles = useGameDescriptionStyles();
  const lines = description
    ? description.split("\n").filter(line => line.trim())
    : [];

  return (
    <>
      {lines.map((text, index) => (
        <Paragraph key={index} style={styles.text}>
          {text}
        </Paragraph>
      ))}
    </>
  );
};
