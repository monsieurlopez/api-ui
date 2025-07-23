import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  FileTextOutlined,
  MailOutlined,
  DollarOutlined,
  ToolOutlined,
  SettingOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { SignedIn, UserButton } from "@clerk/clerk-react";

import { Pricing, Home, Contact, Docs, Account } from "./pages/pages";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "1":
        navigate("/");
        break;
      case "2":
        navigate("/docs");
        break;
      case "3":
        navigate("/contact");
        break;
      case "4":
        navigate("/pricing");
        break;
      case "6":
        navigate("/settings/api");
        break;
      case "7":
        navigate("/settings/account");
        break;
    }
  };

  const keyMap: Record<string, string> = {
    "/": "1",
    "/docs": "2",
    "/contact": "3",
    "/pricing": "4",
    "/settings/api": "6",
    "/settings/account": "7",
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={collapsed}
        onCollapse={(val) => setCollapsed(val)}
        style={{
          height: "100vh",
          position: "sticky",
          top: 0,
          overflow: "auto",
        }}
        trigger={null}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[keyMap[location.pathname] || "1"]}
          onClick={handleMenuClick}
          items={[
            { key: "1", icon: <HomeOutlined />, label: "Home" },
            { key: "2", icon: <FileTextOutlined />, label: "Documentation" },
            { key: "3", icon: <MailOutlined />, label: "Contact" },
            { key: "4", icon: <DollarOutlined />, label: "Pricing" },
            {
              key: "5",
              icon: <ToolOutlined />,
              label: "Settings",
              children: [
                { key: "6", icon: <SwapOutlined />, label: "API" },
                { key: "7", icon: <SettingOutlined />, label: "Account" },
              ],
            },
          ]}
        />
        <div className="absolute bottom-2 left-7">
          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </div>
      </Sider>
      <Layout className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "18px" }}
          />
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/settings/account" element={<Account />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
