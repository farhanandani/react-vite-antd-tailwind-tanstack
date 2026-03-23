import { Layout, Button, Dropdown, Avatar, Space } from "antd";
import type { MenuProps } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuth } from "@/context/useAuth";

const { Header } = Layout;

interface AppHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

/**
 * Navbar dashboard
 * Berisi toggle sidebar dan dropdown user
 */
export function AppHeader({ collapsed, onToggle }: AppHeaderProps) {
  const { user, logout } = useAuth();

  const userMenuItems: MenuProps["items"] = [
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      danger: true,
      onClick: logout,
    },
  ];

  return (
    <Header className="flex items-center justify-between px-4 bg-white border-b border-gray-200">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onToggle}
        className="text-base"
      />

      <Dropdown
        menu={{ items: userMenuItems }}
        placement="bottomRight"
        trigger={["click"]}
      >
        <Space className="cursor-pointer">
          <Avatar icon={<UserOutlined />} className="bg-primary" />
          <span className="hidden sm:inline font-medium">
            {user?.name ?? user?.email ?? "User"}
          </span>
        </Space>
      </Dropdown>
    </Header>
  );
}
