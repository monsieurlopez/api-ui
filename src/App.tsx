import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
//import { Header } from "./components/layout/Header";
import { Pricing, Home, Contact, Docs, Account } from "./pages/pages";
import { useState } from "react";
import type { MenuProps } from "antd";
import { SignedIn, UserButton } from "@clerk/clerk-react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ToolOutlined,
  HomeOutlined,
  FileTextOutlined,
  MailOutlined,
  DollarOutlined,
  SettingOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        width={200}
        collapsed={collapsed}
        style={siderStyle}
        className="h-[100vh] bg-white text-black dark:bg-gray-900 dark:text-white mx-auto flex flex-col items-center overflow-auto"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
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
        <Header className="p-0 bg-white dark:bg-gray-900">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content className="m-6 p-6 min-h-[280px] rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/settings/account" element={<Account />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
