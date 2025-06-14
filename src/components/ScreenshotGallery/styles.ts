import { CSSProperties } from "react";

export const useScreenshotGalleryStyles = () => {
  return {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: 16,
    } as CSSProperties,
    image: {
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      width: "100%",
      height: "auto",
    } as CSSProperties,
  };
};
