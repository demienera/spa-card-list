import { BackButton } from "../../components/BackButton";
import { GameForm } from "../../components/Forms/GameForm";
import { PageTitle } from "../../components/PageTitle";
import { useCreateGamePageStyles } from "./styles";

const CreateGamePage = () => {
  const styles = useCreateGamePageStyles();
  return (
    <div style={styles.container}>
      <BackButton />
      <PageTitle level={2} style={styles.title}>
        Создание карточки игры
      </PageTitle>

      <div style={styles.formWrapper}>
        <GameForm />
      </div>
    </div>
  );
};

export default CreateGamePage;
