import { Image } from "antd";
import { useGameImageStyles } from "./styles";

interface GameImageProps {
  src?: string;
  alt?: string;
}

export const GameImage = ({ src, alt }: GameImageProps) => {
  const styles = useGameImageStyles();
  return (
    <div style={styles.container}>
      <Image src={src} alt={alt} style={styles.image} preview={false} />
    </div>
  );
};
