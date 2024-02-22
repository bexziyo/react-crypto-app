import { Layout, Spin } from "antd";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import AppContent from "./AppContetn";
import { useContext } from "react";
import CryptoContext from "../context/crypto-context";

export default function AppLoyaut() {
  const { loading } = useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSidebar />
        <AppContent />
      </Layout>
    </Layout>
  );
}
