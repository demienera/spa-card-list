import { useState } from "react";
import { Image } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import { ImagePlaceholder } from "../ImagePlaceholder/ImagePlaceholder";
import { useGameImageStyles } from "./styles";

interface GameImageProps {
  src?: string;
  alt?: string;
}

export const GameImage = ({ src, alt }: GameImageProps) => {
  const styles = useGameImageStyles();
  const [hasError, setHasError] = useState(false);
  const showPlaceholder = !src || hasError;

  return (
    <div style={styles.container}>
      {showPlaceholder ? (
        <ImagePlaceholder
          text="Картинка не загрузилась"
          icon={<PictureOutlined style={styles.placeholderIcon} />}
          style={styles.placeholderStyle}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          style={styles.image}
          preview={false}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};
