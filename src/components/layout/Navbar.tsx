import Link from "next/link";
import { Menu, Search } from "lucide-react"; // Icons

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-pharma-blue tracking-tight">
              ROXANE <span className="text-pharma-teal">LABS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-600 hover:text-pharma-blue font-medium transition"
            >
              Who We Are
            </Link>
            <Link
              href="/products"
              className="text-gray-600 hover:text-pharma-blue font-medium transition"
            >
              Products
            </Link>
            <Link
              href="/manufacturing"
              className="text-gray-600 hover:text-pharma-blue font-medium transition"
            >
              Manufacturing
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-pharma-blue font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-pharma-blue transition">
              <Search size={20} />
            </button>
            <Link
              href="/dashboard"
              className="hidden md:block px-5 py-2 bg-pharma-blue text-white rounded-full font-medium hover:bg-blue-900 transition shadow-md hover:shadow-lg"
            >
              Distributor Login
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
