import { Image } from "antd";
import { useScreenshotGalleryStyles } from "./styles";

interface ScreenshotGalleryProps {
  screenshots: string[];
}

export const ScreenshotGallery = ({ screenshots }: ScreenshotGalleryProps) => {
  const styles = useScreenshotGalleryStyles();

  if (!screenshots?.length) return null;

  return (
    <div style={styles.container}>
      {screenshots.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Скриншот ${index + 1}`}
          style={styles.image}
        />
      ))}
    </div>
  );
};
