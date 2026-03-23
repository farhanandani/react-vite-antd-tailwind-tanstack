import { Link } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { useLogin } from "./hooks/useLogin";

function LoginPage() {
  const { login, isLoading, error } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-amber-50 p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Selamat Datang</h1>
            <p className="mt-2 text-gray-600">
              Masuk ke akun Anda untuk melanjutkan
            </p>
          </div>

          <div className="flex justify-center">
            <LoginForm onSubmit={login} isLoading={isLoading} error={error} />
          </div>
        </div>

        {/* Footer link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          <Link
            to="/home"
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            ← Kembali ke beranda
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
