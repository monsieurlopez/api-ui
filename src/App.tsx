import { Layout, theme } from "antd";
import { useState } from "react";
import { SidebarMenu } from "./components/layout/SideBarMenu";
import { HeaderBar } from "./components/layout/HeaderBar";
import { MainContent } from "./components/layout/MainContent";

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <SidebarMenu collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <HeaderBar
          collapsed={collapsed}
          toggleCollapsed={() => setCollapsed(!collapsed)}
          bg={colorBgContainer}
        />
        <MainContent bg={colorBgContainer} radius={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default App;
