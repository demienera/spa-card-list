import { Modal } from "antd";
import { GameForm } from "../Forms/GameForm";
import { useCreateGameModalStyles } from "./styles";

interface CreateGameModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateGameModal = ({ open, onClose }: CreateGameModalProps) => {
  const styles = useCreateGameModalStyles();

  const handleSuccess = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title="Создание карточки игры"
      width={800}
      styles={styles.modal}
    >
      <div style={styles.formWrapper}>
        <GameForm
          onSuccess={handleSuccess}
          showCancel={true}
          onCancel={onClose}
        />
      </div>
    </Modal>
  );
};
