import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { useAuth } from "@/context/useAuth";
import { getSidebarMenuByRole } from "@/config/sidebar-menu";
import { LAYOUT_CONSTANTS } from "../constants";

const { Sider } = Layout;

const ICON_MAP = {
  home: <HomeOutlined />,
  example: <AppstoreOutlined />,
  admin: <SafetyOutlined />,
} as const;

interface AppSidebarProps {
  collapsed: boolean;
}

/**
 * Sidebar dengan menu role-based
 * Hanya menampilkan item yang diizinkan untuk role user saat ini
 */
export function AppSidebar({ collapsed }: AppSidebarProps) {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItemsWithPath = useMemo(() => {
    const role = user?.role ?? "user";
    return getSidebarMenuByRole(role);
  }, [user?.role]);

  const menuItems = useMemo(
    () =>
      menuItemsWithPath.map((item) => ({
        key: item.key,
        icon: item.iconKey ? ICON_MAP[item.iconKey] : undefined,
        label: item.label,
      })),
    [menuItemsWithPath],
  );

  const selectedKey = useMemo(() => {
    const current = menuItemsWithPath.find(
      (item) => location.pathname === item.path,
    );
    return current?.key ?? menuItemsWithPath[0]?.key;
  }, [location.pathname, menuItemsWithPath]);

  const handleMenuClick = ({ key }: { key: string }) => {
    const item = menuItemsWithPath.find((m) => m.key === key);
    if (item?.path) {
      navigate(item.path);
    }
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={LAYOUT_CONSTANTS.SIDER_WIDTH}
      collapsedWidth={LAYOUT_CONSTANTS.SIDER_COLLAPSED_WIDTH}
      theme="light"
      className="!min-h-[100vh]"
    >
      <div className="h-14 flex items-center justify-center border-b border-gray-200">
        <span className={`font-semibold text-lg ${collapsed ? "hidden" : ""}`}>
          Web Boilerplate by Farhan Andani
        </span>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        items={menuItems}
        onClick={handleMenuClick}
        className="border-none mt-4"
        style={{ height: "calc(100vh - 56px)" }}
      />
    </Sider>
  );
}
