import { Link } from "react-router-dom";
import { Button, Typography } from "antd";

function HomePage() {
  return (
    <div>
      <Typography.Title level={3}>Selamat Datang</Typography.Title>
      <Typography.Paragraph className="text-gray-600 mb-6">
        Kelola booking dan perjalanan Anda dari dashboard ini. Jelajahi fitur
        Example untuk melihat contoh integrasi.
      </Typography.Paragraph>
      <Link to="/example">
        <Button type="primary">Ke Halaman Example</Button>
      </Link>
    </div>
  );
}

export default HomePage;
