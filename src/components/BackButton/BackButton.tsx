import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useBackButtonStyles } from "./styles";

export const BackButton = () => {
  const navigate = useNavigate();
  const styles = useBackButtonStyles();

  return (
    <Button
      type="text"
      icon={<ArrowLeftOutlined />}
      onClick={() => navigate(-1)}
      style={styles.button}
    >
      Назад
    </Button>
  );
};
