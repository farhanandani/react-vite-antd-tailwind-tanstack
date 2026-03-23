import { Link } from "react-router-dom";
import { Button } from "antd";
import { CompassOutlined } from "@ant-design/icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Jelajahi Dunia dengan
            <span className="block text-teal-600 mt-2">Mudah & Terpercaya</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Agen perjalanan terpercaya untuk tiket pesawat, hotel, dan paket
            wisata. Wujudkan petualangan impian Anda bersama kami.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button
                type="primary"
                size="large"
                icon={<CompassOutlined />}
                iconPosition="end"
                className="h-12 px-8 text-base font-medium bg-teal-600 hover:bg-teal-700 border-teal-600"
              >
                Mulai Perjalanan
              </Button>
            </Link>
            <Link to="/home">
              <Button size="large" className="h-12 px-8 text-base font-medium">
                Lihat Destinasi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
