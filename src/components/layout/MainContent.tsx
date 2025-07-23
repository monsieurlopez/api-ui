import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { Pricing, Home, Contact, Docs, Account } from "../../pages/pages";

const { Content } = Layout;

type Props = {
  bg: string;
  radius: number;
};

export const MainContent = ({ bg, radius }: Props) => {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: bg,
          borderRadius: radius,
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
  );
};
