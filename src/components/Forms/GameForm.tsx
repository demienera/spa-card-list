import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  App as AntdApp,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
} from "antd";
import type { Dayjs } from "dayjs";
import { useAppDispatch } from "../../app/hooks";
import { SelectField } from "./fields/SelectField";
import { ScreenshotField } from "./fields/ScreenshotField";
import { InputImageField } from "./fields/InputImageField";
import { useGameForm } from "../../hooks/useGameForm";
import { Game } from "../../utils/types";
import { addCreatedGame } from "../../app/slices/games/slice";

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

export const GameForm = () => {
  const [form] = Form.useForm();
  const { localGenres, localPlatforms } = useGameForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    navigate("/games");
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="name" label="Название" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="description_raw"
        label="Описание"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item
        name="released"
        label="Дата релиза"
        rules={[{ required: true }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <InputImageField />
      <Form.Item name="rating" label="Рейтинг">
        <InputNumber min={0} max={10} step={0.1} style={{ width: "100%" }} />
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
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          Создать игру
        </Button>
      </Form.Item>
    </Form>
  );
};
