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
    <div className="w-full flex justify-center px-4 sm:px-6">
      <Form
        layout="vertical"
        name="contact-form"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="w-full max-w-2xl"
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input size="middle" />
        </Form.Item>

        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input size="middle" />
        </Form.Item>

        <Form.Item
          name={["user", "Message"]}
          label="Message"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={5} />
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
            I have read the <a href="#">agreement</a>
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
