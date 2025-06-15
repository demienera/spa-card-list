import { Link } from "react-router-dom";
import { useLogoStyles } from "./styles";

interface AppLogoProps {
  text: string;
}

export const AppLogo = ({ text }: AppLogoProps) => {
  const styles = useLogoStyles();
  return (
    <Link to="/" style={styles.logo}>
      {text}
    </Link>
  );
};
