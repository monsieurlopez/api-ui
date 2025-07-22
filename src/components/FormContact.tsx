import type React from "react";
//import { useTranslation } from "react-i18next";
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
  //const { t } = useTranslation();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

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
    <div className="container w-full flex flex-col items-center mx-auto">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "Message"]}
          label="Message"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
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
          {...layout}
        >
          <Checkbox>
            I have read the <a href="#">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
