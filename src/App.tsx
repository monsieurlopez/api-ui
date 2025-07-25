import { Layout } from "antd";
import { useState } from "react";
import { SidebarMenu } from "./components/layout/SideBarMenu";
import { HeaderBar } from "./components/layout/HeaderBar";
import { MainContent } from "./components/layout/MainContent";

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen">
      <SidebarMenu collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <HeaderBar
          collapsed={collapsed}
          toggleCollapsed={() => setCollapsed(!collapsed)}
        />
        <MainContent />
      </Layout>
    </Layout>
  );
};

export default App;
