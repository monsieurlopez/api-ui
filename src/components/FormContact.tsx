import type React from "react";
import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/useTheme";

type ContactFormValues = {
  user: {
    name: string;
    email: string;
    Message: string;
  };
  agreement: boolean;
};

export const FormContact: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  const onFinish = (values: ContactFormValues) => {
    console.log(values);
  };

  return (
    <div className="w-full flex justify-start">
      <Form
        layout="vertical"
        name="contact-form"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="w-full max-w-lg xl:max-w-2xl"
      >
        <Form.Item
          name={["user", "name"]}
          label={
            <span className="text-gray-900 dark:text-gray-100">
              {t("contact.name")}
            </span>
          }
          rules={[
            {
              required: true,
              message: t("contact.validation.required", {
                label: t("contact.name"),
              }),
            },
          ]}
        >
          <Input
            size="middle"
            className="dark:placeholder-gray-400"
            style={{
              backgroundColor: theme === "dark" ? "#374151" : "white",
              color: theme === "dark" ? "#fff" : "#000",
              borderColor: theme === "dark" ? "#4b5563" : "#d1d5db",
            }}
          />
        </Form.Item>

        <Form.Item
          name={["user", "email"]}
          label={
            <span className="text-gray-900 dark:text-gray-100">
              {t("contact.email")}
            </span>
          }
          rules={[
            {
              type: "email",
              message: t("contact.validation.email", {
                label: t("contact.email"),
              }),
            },
            {
              required: true,
              message: t("contact.validation.required", {
                label: t("contact.email"),
              }),
            },
          ]}
        >
          <Input
            size="middle"
            className="dark:placeholder-gray-400"
            style={{
              backgroundColor: theme === "dark" ? "#374151" : "white",
              color: theme === "dark" ? "#fff" : "#000",
              borderColor: theme === "dark" ? "#4b5563" : "#d1d5db", // Tailwind: gray-600 / gray-300
            }}
          />
        </Form.Item>

        <Form.Item
          name={["user", "Message"]}
          label={
            <span className="text-gray-900 dark:text-gray-100">
              {t("contact.message")}
            </span>
          }
          rules={[
            {
              required: true,
              message: t("contact.validation.required", {
                label: t("contact.message"),
              }),
            },
          ]}
        >
          <Input.TextArea
            rows={5}
            className="dark:placeholder-gray-400"
            style={{
              backgroundColor: theme === "dark" ? "#374151" : "white",
              color: theme === "dark" ? "#fff" : "#000",
              borderColor: theme === "dark" ? "#4b5563" : "#d1d5db", // Tailwind: gray-600 / gray-300
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            className="max-w-max"
          >
            {t("contact.submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
