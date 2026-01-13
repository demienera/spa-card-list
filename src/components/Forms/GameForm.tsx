import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  App as AntdApp,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
  Space,
  Typography,
} from "antd";

const { TextArea } = Input;
const { Text } = Typography;
import type { Dayjs } from "dayjs";
import { useAppDispatch } from "../../app/hooks";
import { SelectField } from "./fields/SelectField";
import { ScreenshotField } from "./fields/ScreenshotField";
import { InputImageField } from "./fields/InputImageField";
import { useGameForm } from "../../hooks/useGameForm";
import { Game } from "../../utils/types";
import { addCreatedGame } from "../../app/slices/games/slice";
import { useGameFormStyles } from "./GameForm/styles";

interface GameFormValues {
  name: string;
  description_raw: string;
  background_image?: string;
  genres: string[];
  platforms: string[];
  developers?: string;
  released?: Dayjs;
  rating?: number;
  screenshots?: string[];
}

interface GameFormProps {
  onSuccess?: () => void;
  showCancel?: boolean;
  onCancel?: () => void;
}

export const GameForm = ({
  onSuccess,
  showCancel = false,
  onCancel,
}: GameFormProps) => {
  const [form] = Form.useForm();
  const { localGenres, localPlatforms } = useGameForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const styles = useGameFormStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { notification } = AntdApp.useApp();

  const onFinish = (values: GameFormValues) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    const newGame: Game = {
      id: -Date.now(),
      name: values.name,
      background_image: values.background_image || "",
      description_raw: values.description_raw,
      released: values.released?.format("YYYY-MM-DD"),
      rating: values.rating,
      developers: values.developers
        ? values.developers
            .split(",")
            .map(name => ({ id: 0, name: name.trim() }))
        : [],
      genres: values.genres.map(name => {
        const genre = localGenres.find(g => g.name === name);
        return { id: genre?.id ?? 0, name };
      }),
      platforms: values.platforms.map(name => ({ platform: { id: 0, name } })),
      screenshots: values.screenshots || [],
    };

    dispatch(addCreatedGame(newGame));
    form.resetFields();

    notification.success({
      message: "Успех",
      description: `Игра "${newGame.name}" успешно добавлена!`,
      placement: "topRight",
    });

    if (onSuccess) {
      onSuccess();
    } else {
      navigate("/games");
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="name" label="Название" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="description_raw"
        label="Описание"
        rules={[
          { required: true },
          { max: 500, message: "Описание не должно превышать 500 символов" },
        ]}
        extra={
          <Form.Item shouldUpdate noStyle>
            {({ getFieldValue }) => {
              const description = getFieldValue("description_raw") || "";
              const length = description.length;
              return (
                <Text
                  type={length > 500 ? "danger" : "secondary"}
                  style={styles.counterText}
                >
                  {length}/500
                </Text>
              );
            }}
          </Form.Item>
        }
      >
        <TextArea
          rows={4}
          maxLength={500}
          showCount={false}
          style={styles.textArea}
        />
      </Form.Item>
      <Form.Item
        name="released"
        label="Дата релиза"
        rules={[{ required: true }]}
      >
        <DatePicker style={styles.datePicker} />
      </Form.Item>
      <InputImageField />
      <Form.Item
        name="rating"
        label="Рейтинг"
        rules={[
          {
            type: "number",
            min: 0,
            max: 5,
            message: "Рейтинг должен быть от 0 до 5",
          },
        ]}
      >
        <InputNumber
          min={0}
          max={5}
          step={0.1}
          precision={1}
          placeholder="0.0 - 5.0"
          style={styles.inputNumber}
          parser={value => {
            if (!value) return "";
            const parsed = parseFloat(value);
            if (isNaN(parsed)) return "";
            if (parsed < 0) return "0";
            if (parsed > 5) return "5";
            return Math.round(parsed * 10) / 10;
          }}
          formatter={value => {
            if (!value) return "";
            const num = parseFloat(value.toString());
            if (isNaN(num)) return "";
            if (num < 0) return "0";
            if (num > 5) return "5";
            return num.toFixed(1);
          }}
        />
      </Form.Item>
      <SelectField name="genres" label="Жанры" options={localGenres} />
      <SelectField
        name="platforms"
        label="Платформы"
        options={localPlatforms}
      />
      <Form.Item name="developers" label="Разработчики">
        <Input placeholder="Nintendo, Sony" />
      </Form.Item>
      <ScreenshotField />
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Создать игру
          </Button>
          {showCancel && onCancel && <Button onClick={onCancel}>Отмена</Button>}
        </Space>
      </Form.Item>
    </Form>
  );
};
