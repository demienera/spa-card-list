import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useScreenshotFieldStyles } from "./ScreenshotField/styles";

export const ScreenshotField = () => {
  const styles = useScreenshotFieldStyles();

  return (
    <Form.List name="screenshots">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} align="start" style={styles.space}>
              <Form.Item
                {...restField}
                name={name}
                rules={[
                  { required: true, message: "Введите URL скриншота" },
                  {
                    validator: (_, value) => {
                      if (!value) return Promise.resolve();
                      try {
                        new URL(value);
                        return /\.(jpg|jpeg|png|webp|gif)$/i.test(value)
                          ? Promise.resolve()
                          : Promise.reject("Неверный формат");
                      } catch {
                        return Promise.reject("Некорректный URL");
                      }
                    },
                  },
                ]}
              >
                <Input placeholder="URL скриншота" style={styles.input} />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
              Добавить скриншот
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};
