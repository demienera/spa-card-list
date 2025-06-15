import { Empty, Image } from "antd";
import { useScreenshotGalleryStyles } from "./styles";

interface ScreenshotGalleryProps {
  screenshots: string[];
}

export const ScreenshotGallery = ({ screenshots }: ScreenshotGalleryProps) => {
  const styles = useScreenshotGalleryStyles();

  if (!screenshots || screenshots.length === 0) {
    return <Empty description="Нет скриншотов" />;
  }

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
