import {
  GlobalOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const features = [
  {
    icon: GlobalOutlined,
    title: "Destinasi Terlengkap",
    description:
      "Akses tiket pesawat, hotel, dan paket wisata ke berbagai destinasi dalam dan luar negeri.",
  },
  {
    icon: ThunderboltOutlined,
    title: "Booking Instan",
    description:
      "Pesan tiket dan akomodasi dengan mudah. Konfirmasi cepat dan proses pembayaran yang aman.",
  },
  {
    icon: SafetyOutlined,
    title: "Perjalanan Terjamin",
    description:
      "Tim support 24/7 siap membantu. Semua booking dilindungi dengan garansi kepuasan.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Mengapa Pilih Kami?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk merencanakan perjalanan impian Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-xl border border-gray-200 bg-gray-50/50 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                <Icon className="text-2xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
