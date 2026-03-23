import { Link } from "react-router-dom";
import { Button } from "antd";
import { useAuth } from "@/context/useAuth";
import { HeroSection } from "./components/HeroSection.tsx";
import { FeaturesSection } from "./components/FeaturesSection.tsx";
import { CTASection } from "./components/CTASection.tsx";

function LandingPage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/home"
              className="text-xl font-bold text-gray-900 hover:text-teal-600 transition-colors"
            >
              Web Boilerplate by Farhan Andani
            </Link>
            <nav className="flex items-center gap-4">
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button type="primary" size="large">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/login">
                    <Button type="default" size="large">
                      Masuk
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button type="primary" size="large">
                      Daftar
                    </Button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Farhanandani.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
