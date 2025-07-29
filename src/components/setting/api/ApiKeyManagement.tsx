import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import { EditOutlined, DeleteOutlined, CopyOutlined } from "@ant-design/icons";

interface ApiKey {
  key: string;
  name: string;
  creationDate: string;
  apiKey: string;
}

export const ApiKeyManagement: React.FC = () => {
  const [dataSource, setDataSource] = useState<ApiKey[]>([
    {
      key: "1",
      name: "CoinRanking",
      apiKey: "coinranking22b1d5f1ed17ba55bcd4a9c076747c62d4bca3520a85df31",
      creationDate: new Date("2025-02-10").toLocaleDateString(),
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingKey, setEditingKey] = useState<ApiKey | null>(null);
  const [form] = Form.useForm();

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
      apiKey: record.apiKey,
    });
    showModal();
  };

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
    message.success("API Key deleted successfully");
  };

  const [messageApi, contextHolder] = message.useMessage();

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
      }
    );
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const currentDate = new Date().toLocaleDateString();

        if (editingKey) {
          setDataSource(
            dataSource.map((item) =>
              item.key === editingKey.key
                ? { ...item, name: values.name, apiKey: values.apiKey }
                : item
            )
          );
          message.success("API Key updated successfully");
        } else {
          setDataSource([
            ...dataSource,
            {
              key: Date.now().toString(),
              name: values.name,
              apiKey: values.apiKey,
              creationDate: currentDate,
            },
          ]);
          message.success("API Key added successfully");
        }
        handleCancel();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
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
        <div style={{ display: "flex", alignItems: "center" }}>
          {`${apiKey.substring(0, 8)}...`}
          <Button
            type="text"
            icon={<CopyOutlined />}
            onClick={() => handleCopyToClipboard(record.apiKey)}
            style={{ marginLeft: "8px" }}
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
      render: (_: any, record: ApiKey) => (
        <div>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          ></Button>
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.key)}
            danger
            style={{ marginLeft: "8px" }}
          ></Button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-auto mt-15">
      {contextHolder}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-left">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Your API Keys
          </h4>
          <p className="mt-2 text-gray-500">
            Here you can manage your API keys. You can edit, delete, or add new
            API keys as needed.
          </p>
        </div>
        <Button
          type="primary"
          onClick={showModal}
          className="whitespace-nowrap rounded bg-blue-500 px-3 py-2 font-medium text-white shadow hover:bg-blue-700 flex max-w-max"
        >
          Add New API Key
        </Button>
      </div>
      <div className="mt-6">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ x: true }}
        />
      </div>
      <Modal
        title={editingKey ? "Edit API Key" : "Add New API Key"}
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
          <Form.Item
            name="apiKey"
            label="API Key"
            rules={[{ required: true, message: "Please input the API key!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
