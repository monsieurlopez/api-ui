import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  toggleCollapsed: () => void;
  bg: string;
};

export const HeaderBar = ({ collapsed, toggleCollapsed, bg }: Props) => (
  <Header
    style={{
      padding: "0 16px",
      background: bg,
      display: "flex",
      alignItems: "center",
    }}
  >
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={toggleCollapsed}
      style={{ fontSize: "18px" }}
    />
  </Header>
);
