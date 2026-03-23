import { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./components/AppSidebar";
import { AppHeader } from "./components/AppHeader";

const { Content } = Layout;

/**
 * Layout utama untuk halaman dashboard
 * Menggunakan Ant Design Layout: Sider (sidebar) + Header (navbar) + Content
 */
export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen">
      <AppSidebar collapsed={collapsed} />
      <Layout>
        <AppHeader
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
        <Content className="m-4 p-4 bg-white rounded-lg min-h-[280px]">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
