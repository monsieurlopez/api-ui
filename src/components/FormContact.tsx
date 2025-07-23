import type React from "react";
import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

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
    <div className="w-full flex justify-center px-4">
      <Form
        layout="vertical"
        name="contact-form"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="w-full max-w-2xl"
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
            className="bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
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
            className="bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
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
            className="bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            {t("contact.submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
