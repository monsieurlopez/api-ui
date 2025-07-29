import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, message, Grid, Tabs } from "antd";
import { EditOutlined, DeleteOutlined, CopyOutlined } from "@ant-design/icons";

interface ApiKey {
  key: string;
  name: string;
  creationDate: string;
  apiKey: string;
}

const generateRandomApiKey = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomString = Array.from({ length: 50 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");

  return `insidersmoves${randomString}`;
};

export const ApiKeyManagement: React.FC = () => {
  const [dataSource, setDataSource] = useState<ApiKey[]>([
    {
      key: "1",
      name: "Api Key Default",
      apiKey: "insidersmoves22b1d5f1ed17ba55bcd4a9c076747c62d4bca3520a85df3",
      creationDate: new Date("2025-02-10").toLocaleDateString(),
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingKey, setEditingKey] = useState<ApiKey | null>(null);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingKey(null);
    form.resetFields();
  };

  const handleEdit = (record: ApiKey) => {
    setEditingKey(record);
    form.setFieldsValue({
      name: record.name,
    });
    showModal();
  };

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
    messageApi.open({
      type: "success",
      content: "API Key deleted successfully",
    });
  };

  const handleCopyToClipboard = (apiKey: string) => {
    navigator.clipboard.writeText(apiKey).then(
      () => {
        messageApi.open({
          type: "success",
          content: "API Key copied to clipboard!",
        });
      },
      (err) => {
        console.error("Could not copy text: ", err);
        messageApi.open({
          type: "error",
          content: "Could not copy text to clipboard",
        });
      }
    );
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        setDataSource(
          dataSource.map((item) =>
            item.key === editingKey?.key ? { ...item, name: values.name } : item
          )
        );
        messageApi.open({
          type: "success",
          content: "API Key updated successfully",
        });
        handleCancel();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCreateApiKey = () => {
    const randomApiKey = generateRandomApiKey();
    const newApiKey = {
      key: Date.now().toString(),
      name: `API Key ${Date.now()}`,
      apiKey: randomApiKey,
      creationDate: new Date().toLocaleDateString(),
    };

    setDataSource([...dataSource, newApiKey]);
    messageApi.open({
      type: "success",
      content: "API Key created successfully",
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "API Key",
      dataIndex: "apiKey",
      key: "apiKey",
      render: (apiKey: string, record: ApiKey) => (
        <div className="flex justify-start items-center">
          {screens.xs
            ? `${apiKey.substring(0, 10)}...`
            : `${apiKey.substring(0, 30)}...`}
          <Button
            type="text"
            icon={<CopyOutlined />}
            onClick={() => handleCopyToClipboard(record.apiKey)}
            className="mx-auto"
            title="Copy to clipboard"
          />
        </div>
      ),
    },
    {
      title: "Creation Date",
      dataIndex: "creationDate",
      key: "creationDate",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: ApiKey) => (
        <div className="flex items-center">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            title="Edit"
          />
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.key)}
            danger
            title="Delete"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-auto mt-15">
      {contextHolder}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Your API Keys
          </h2>
          <p className="mt-2 text-gray-500">
            Here you can manage your API keys. You can edit, delete, or add new
            API keys as needed.
          </p>
        </div>
        <Button
          type="primary"
          onClick={handleCreateApiKey}
          className="whitespace-nowrap rounded bg-blue-500 px-3 py-2 font-medium text-white shadow hover:bg-blue-700 flex max-w-max"
        >
          Create New API Key
        </Button>
      </div>
      <Tabs className="mt-6">
        <div className="mt-6">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ x: true }}
          />
        </div>
      </Tabs>
      <Modal
        title="Edit API Key Name"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
