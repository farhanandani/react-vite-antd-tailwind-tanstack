import { Typography } from "antd";

function AdminPage() {
  return (
    <div>
      <Typography.Title level={3}>Admin Panel</Typography.Title>
      <Typography.Paragraph>
        Halaman ini hanya dapat diakses oleh user dengan role admin.
      </Typography.Paragraph>
    </div>
  );
}

export default AdminPage;
