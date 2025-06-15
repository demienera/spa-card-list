import { HeroSection } from "../../components/HeroSection";

const HomePage = () => {
  return (
    <HeroSection
      title="Твой арсенал игр"
      subtitle="От хардкора до казуала — всё на одной полке"
      buttonText="Перейти в каталог"
      buttonLink="/games"
      backgroundImage={"/bg.jpg"}
    />
  );
};

export default HomePage;
