import type React from "react";
import { Button, Form, Input, Checkbox } from "antd";

type ContactFormValues = {
  user: {
    name: string;
    email: string;
    Message: string;
  };
  agreement: boolean;
};

export const FormContact: React.FC = () => {
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
          label={<span className="text-gray-900 dark:text-gray-100">Name</span>}
          rules={[{ required: true }]}
        >
          <Input
            size="middle"
            className="bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
          />
        </Form.Item>

        <Form.Item
          name={["user", "email"]}
          label={
            <span className="text-gray-900 dark:text-gray-100">Email</span>
          }
          rules={[{ type: "email", required: true }]}
        >
          <Input
            size="middle"
            className="bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
          />
        </Form.Item>

        <Form.Item
          name={["user", "Message"]}
          label={
            <span className="text-gray-900 dark:text-gray-100">Message</span>
          }
          rules={[{ required: true }]}
        >
          <Input.TextArea
            rows={5}
            className="bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <Checkbox>
            <span className="text-gray-900 dark:text-gray-100">
              I have read the{" "}
              <a
                href="#"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                agreement
              </a>
            </span>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
