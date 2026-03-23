import { Link } from "react-router-dom";
import { Button } from "antd";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-800 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Siap Memulai Petualangan Anda?
        </h2>
        <p className="mt-4 text-lg text-teal-100">
          Daftar sekarang dan dapatkan penawaran terbaik untuk perjalanan impian
          Anda.
        </p>
        <div className="mt-8">
          <Link to="/login">
            <Button
              type="primary"
              size="large"
              className="h-12 px-8 text-base font-medium bg-teal-500 hover:bg-teal-400 border-teal-500"
            >
              Daftar Gratis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
