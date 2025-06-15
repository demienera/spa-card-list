import { Radio } from "antd";
import { useCategoriesToggleStyles } from "./styles";

type Props = {
  value: "all" | "favorites";
  onChange: (value: "all" | "favorites") => void;
};

export const CategoriesToggle = ({ value, onChange }: Props) => {
  const styles = useCategoriesToggleStyles();

  return (
    <Radio.Group
      value={value}
      onChange={e => onChange(e.target.value)}
      style={styles.radioGroup}
    >
      <Radio.Button value="all">Все</Radio.Button>
      <Radio.Button value="favorites">Избранные</Radio.Button>
    </Radio.Group>
  );
};
