import bgImage from "../../assets/image/bg.jpg";
import { HeroSection } from "../../components/HeroSection";

export const HomePage = () => {
  return (
    <HeroSection
      title="Твой арсенал игр"
      subtitle="От хардкора до казуала — всё на одной полке"
      buttonText="Перейти в каталог"
      buttonLink="/products"
      backgroundImage={bgImage}
    />
  );
};
