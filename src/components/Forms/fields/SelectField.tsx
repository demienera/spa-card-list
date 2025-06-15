import { Form, Select } from "antd";

interface SelectFieldProps {
  name: string;
  label: string;
  options: { id: number; name: string }[];
  required?: boolean;
  placeholder?: string;
}

export const SelectField = ({
  name,
  label,
  options,
  required = true,
  placeholder = "Выберите",
}: SelectFieldProps) => (
  <Form.Item
    label={label}
    name={name}
    rules={required ? [{ required: true, message: `Укажите ${label}` }] : []}
  >
    <Select
      mode="multiple"
      placeholder={placeholder}
      showSearch
      optionFilterProp="children"
    >
      {options.map(opt => (
        <Select.Option key={opt.id} value={opt.name}>
          {opt.name}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
);
