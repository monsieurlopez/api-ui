import React from "react";
import { Table, Button, Tooltip } from "antd";
import {
  CheckCircleOutlined,
  MinusCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import type { Plan, Section } from "../../../config/plansDictionary";

interface TablePlansProps {
  plans: Plan[];
  sections: Section[];
  billingFrequency: "monthly" | "annually";
}

const isVariablePrice = (
  price: string | { monthly: string; annually: string }
): price is { monthly: string; annually: string } => {
  return typeof price !== "string";
};

export const TablePlans: React.FC<TablePlansProps> = ({
  plans,
  sections,
  billingFrequency,
}) => {
  const columns = [
    {
      title: (
        <div>
          <div style={{ fontWeight: "bold", fontSize: "16px" }}>
            Compare prices
          </div>
          <div style={{ fontSize: "12px", color: "#666" }}>
            Price per month (billed yearly)
          </div>
        </div>
      ),
      dataIndex: "feature",
      key: "feature",
      render: (text: string, record: any) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>{text}</span>
          {record.tooltip && (
            <Tooltip title={record.tooltip}>
              <InfoCircleOutlined
                style={{ marginLeft: "8px", color: "#999" }}
              />
            </Tooltip>
          )}
        </div>
      ),
    },
    ...plans.map((plan) => ({
      title: (
        <div>
          <div
            style={{
              fontWeight: "bold",
              color: plan.isStarter ? "#000" : "#1890ff",
            }}
          >
            {plan.name}
          </div>
          <div style={{ fontSize: "12px", color: "#666" }}>
            {isVariablePrice(plan.price)
              ? billingFrequency === "monthly"
                ? plan.price.monthly
                : plan.price.annually
              : plan.price}{" "}
            / per user
          </div>
        </div>
      ),
      dataIndex: plan.name,
      key: plan.name,
      render: (value: any) =>
        typeof value === "string" ? (
          <span style={{ color: "#666" }}>{value}</span>
        ) : value ? (
          <CheckCircleOutlined style={{ color: "#52c41a" }} />
        ) : (
          <MinusCircleOutlined style={{ color: "#d9d9d9" }} />
        ),
    })),
  ];

  const dataSource = sections.flatMap((section) => [
    {
      key: `section-${section.name}`,
      feature: (
        <span style={{ fontWeight: "bold", fontSize: "16px" }}>
          {section.name}
        </span>
      ),
      colSpan: plans.length + 1,
    },
    ...section.features.map((feature) => ({
      key: feature.name,
      feature: feature.name,
      tooltip: feature.tooltip,
      ...feature.plans,
    })),
  ]);

  return (
    <div style={{ marginTop: "80px", overflowX: "auto" }}>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        pagination={false}
        rowClassName={(record) =>
          record.key.startsWith("section-") ? "section-header" : ""
        }
      />
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {plans.map((plan) => (
          <Link
            key={plan.name}
            to={plan.buttonLink}
            style={{ margin: "0 10px" }}
          >
            <Button type={plan.isStarter ? "default" : "primary"}>
              {plan.buttonText}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
