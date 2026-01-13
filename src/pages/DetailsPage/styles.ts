import { theme } from "antd";
import { CSSProperties } from "react";

const { useToken } = theme;

export const useDetailsPageStyles = () => {
  const { token } = useToken();

  return {
    spinner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    notFound: {
      textAlign: "center",
      padding: 64,
    } as CSSProperties,
    container: {
      width: "100%",
      maxWidth: 1400,
      marginInline: "auto",
      padding: "0 48px 48px",
    } as CSSProperties,
    heroSection: {
      position: "relative",
      width: "100%",
      minHeight: "500px",
      marginBottom: 48,
      borderRadius: 20,
      overflow: "hidden",
    } as CSSProperties,
    heroImage: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
    } as CSSProperties,
    heroImageBg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    } as CSSProperties,
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(180deg, rgba(17, 24, 39, 0.3) 0%, rgba(17, 24, 39, 0.9) 100%)",
      zIndex: 1,
    } as CSSProperties,
    heroContent: {
      position: "relative",
      zIndex: 2,
      padding: "64px 48px 48px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      height: "100%",
      minHeight: "500px",
    } as CSSProperties,
    heroTitle: {
      color: "#ffffff",
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      fontWeight: 700,
      marginBottom: 24,
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    } as CSSProperties,
    heroActions: {
      marginTop: 16,
    } as CSSProperties,
    contentRow: {
      marginTop: 0,
    } as CSSProperties,
    contentCard: {
      background: "rgba(31, 41, 55, 0.6)",
      border: "1px solid rgba(55, 65, 81, 0.5)",
      borderRadius: 16,
      marginBottom: 24,
      backdropFilter: "blur(10px)",
    } as CSSProperties,
    sectionTitle: {
      marginBottom: 24,
      color: token.colorTextHeading,
    } as CSSProperties,
    sidebar: {
      position: "sticky",
      top: 80,
    } as CSSProperties,
    sidebarCard: {
      background: "rgba(31, 41, 55, 0.6)",
      border: "1px solid rgba(55, 65, 81, 0.5)",
      borderRadius: 16,
      marginBottom: 24,
      backdropFilter: "blur(10px)",
    } as CSSProperties,
    infoItem: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    } as CSSProperties,
    infoHeader: {
      display: "flex",
      alignItems: "center",
      gap: 8,
    } as CSSProperties,
    infoIcon: {
      fontSize: 16,
      color: token.colorTextSecondary,
      flexShrink: 0,
    } as CSSProperties,
    infoLabel: {
      fontSize: 12,
      fontWeight: 600,
      color: token.colorTextSecondary,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    } as CSSProperties,
    infoValue: {
      fontSize: 15,
      color: token.colorTextBase,
      fontWeight: 500,
    } as CSSProperties,
    genreTag: {
      background: "rgba(139, 92, 246, 0.15)",
      border: "1px solid rgba(139, 92, 246, 0.3)",
      color: "#c4b5fd",
      borderRadius: 8,
      padding: "4px 12px",
    } as CSSProperties,
    platformTag: {
      background: "rgba(59, 130, 246, 0.15)",
      border: "1px solid rgba(59, 130, 246, 0.3)",
      color: "#93c5fd",
      borderRadius: 8,
      padding: "4px 12px",
    } as CSSProperties,
    ageTag: {
      background: "rgba(139, 92, 246, 0.15)",
      border: "1px solid rgba(139, 92, 246, 0.3)",
      color: "#c4b5fd",
      borderRadius: 8,
      padding: "4px 12px",
    } as CSSProperties,
    websiteLink: {
      color: token.colorPrimary,
      textDecoration: "none",
      fontSize: 14,
      transition: "all 0.2s",
      display: "inline-block",
      marginTop: 4,
    } as CSSProperties,
    infoSpace: {
      width: "100%",
    } as CSSProperties,
    tagsSpace: {
      marginTop: 8,
    } as CSSProperties,
    metacriticTag: {
      marginTop: 4,
    } as CSSProperties,
    metaBlock: {
      display: "flex",
      flexDirection: "column",
      gap: 15,
      marginBlockEnd: 32,
    } as CSSProperties,
    divider: {
      borderColor: token.colorBorder,
      marginBlock: 32,
    } as CSSProperties,
    text: {
      marginBottom: 16,
      fontSize: "clamp(14px, 1.2vw, 17px)",
      lineHeight: 1.8,
      color: token.colorTextSecondary,
    } as CSSProperties,
    errorAlert: {
      marginBottom: 24,
    } as CSSProperties,
    ratingIcon: (color: string) =>
      ({
        color,
      }) as CSSProperties,
    ratingValue: (color: string) =>
      ({
        color,
        fontSize: 32,
      }) as CSSProperties,
    ratingProgress: {
      marginTop: 16,
    } as CSSProperties,
  };
};
