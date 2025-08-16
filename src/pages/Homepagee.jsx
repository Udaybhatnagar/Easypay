import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Zap, CreditCard, Smartphone, Users } from "lucide-react";

export const Homepagee = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-4xl font-extrabold text-indigo-700 tracking-tight">
          EasyPay
        </h1>
        <nav className="space-x-6 text-lg">
          <a
            href="#features"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            About
          </a>
        </nav>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/signin")}
            className="bg-white text-gray-800 border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition shadow-sm"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition shadow"
          >
            Signup
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-8 md:px-16 py-32 bg-white text-center">
        <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-repeat"></div>
        <div className="relative max-w-3xl z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Make Every Payment Effortless
          </h2>
          <p className="text-gray-700 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Join millions who trust EasyPay for quick, secure, and seamless
            digital transactions. Your money, your control — anytime, anywhere.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow hover:bg-indigo-700 hover:scale-105 transition"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 md:px-16 py-24 bg-white">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <Zap className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              Instant Transfers
            </h4>
            <p className="text-gray-600 text-base">
              Send and receive money in real-time with zero delays and maximum
              reliability.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <ShieldCheck className="w-12 h-12 mx-auto text-green-600 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              Secure Payments
            </h4>
            <p className="text-gray-600 text-base">
              Top-tier encryption ensures your transactions remain private and
              safe.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <CreditCard className="w-12 h-12 mx-auto text-pink-600 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              Bill Payments
            </h4>
            <p className="text-gray-600 text-base">
              Quickly pay electricity, water, mobile, and more all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Why EasyPay (as cards) */}
      <section id="about" className="px-8 md:px-16 py-24 bg-gray-50">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why EasyPay?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <ShieldCheck className="w-12 h-12 mx-auto text-green-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Secure</h4>
            <p className="text-gray-600 text-base">
              Bank-level encryption keeps your money safe at all times.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <Zap className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fast</h4>
            <p className="text-gray-600 text-base">
              Transfers complete instantly, no waiting required.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <Smartphone className="w-12 h-12 mx-auto text-indigo-500 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Easy</h4>
            <p className="text-gray-600 text-base">
              Simple interface, send money in just a few taps.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <Users className="w-12 h-12 mx-auto text-purple-500 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Trusted</h4>
            <p className="text-gray-600 text-base">
              Millions of users rely on EasyPay every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-auto">
        <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-3">EasyPay</h4>
            <p className="text-sm">
              Making payments simple, secure, and effortless. Trusted by
              thousands worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400">
                  About
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400">
                Twitter
              </a>
              <a href="#" className="hover:text-indigo-400">
                LinkedIn
              </a>
              <a href="#" className="hover:text-indigo-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
          © {new Date().getFullYear()} EasyPay. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
