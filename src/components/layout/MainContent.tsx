import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { Pricing, Home, Contact, Docs, Account, Api } from "../../pages/pages";
import { useTheme } from "../../context/useTheme.ts";

const { Content } = Layout;

export const MainContent: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Content
      style={{
        backgroundColor: theme === "dark" ? "#001529" : "#fff",
        borderLeft: "1px solid #f0f0f0",
      }}
    >
      <div
        style={{
          padding: 24,
          minHeight: 360,
          backgroundColor: theme === "dark" ? "#001529" : "#fff",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings/account" element={<Account />} />
          <Route path="/settings/api" element={<Api />} />
        </Routes>
      </div>
    </Content>
  );
};
