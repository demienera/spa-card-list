import { HeroSection } from "../../components/HeroSection";
import { usePublicPath } from "../../hooks/usePublicPath";

const HomePage = () => {
  const bgImage = usePublicPath("bg.jpg");
  return (
    <HeroSection
      title="Твой арсенал игр"
      subtitle="От хардкора до казуала — всё на одной полке"
      buttonText="Перейти в каталог"
      buttonLink="/games"
      backgroundImage={bgImage}
    />
  );
};

export default HomePage;
