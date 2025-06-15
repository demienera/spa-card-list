import { Form, Input } from "antd";

export const InputImageField = () => (
  <Form.Item
    label="Изображение (URL)"
    name="background_image"
    rules={[
      {
        validator: (_, value) => {
          if (!value) return Promise.resolve();
          try {
            new URL(value);
            return /\.(jpg|jpeg|png|webp|gif)$/i.test(value)
              ? Promise.resolve()
              : Promise.reject("Неверный формат изображения");
          } catch {
            return Promise.reject("Некорректный URL");
          }
        },
      },
    ]}
  >
    <Input placeholder="https://example.com/image.jpg" />
  </Form.Item>
);
