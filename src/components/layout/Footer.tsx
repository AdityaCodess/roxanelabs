import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              ROXANE <span className="text-pharma-teal">LABS</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A WHO-GMP & ISO 9001:2015 certified pharmaceutical manufacturer
              committed to delivering quality formulations across the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:text-pharma-teal transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-pharma-teal transition"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-pharma-teal transition"
                >
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/manufacturing"
                  className="hover:text-pharma-teal transition"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="hover:text-pharma-teal transition"
                >
                  Quality Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-pharma-teal transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Office */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-pharma-teal shrink-0 mt-1" />
                <span>
                  Plot No. 12, EPIP Phase-1,
                  <br />
                  Jharmajri, Baddi,
                  <br />
                  Himachal Pradesh - 173205
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-pharma-teal shrink-0" />
                <span>+91 98XXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-pharma-teal shrink-0" />
                <span>info@roxane.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Certifications */}
          <div>
            <h4 className="text-white font-bold mb-6">Accreditations</h4>
            <div className="grid grid-cols-2 gap-4">
              {/* Simple CSS badges for now */}
              <div className="border border-slate-700 p-3 text-center rounded bg-slate-800 hover:border-pharma-teal transition cursor-default">
                <span className="block font-bold text-white">WHO</span>
                <span className="text-xs">GMP Certified</span>
              </div>
              <div className="border border-slate-700 p-3 text-center rounded bg-slate-800 hover:border-pharma-teal transition cursor-default">
                <span className="block font-bold text-white">ISO</span>
                <span className="text-xs">9001:2015</span>
              </div>
              <div className="border border-slate-700 p-3 text-center rounded bg-slate-800 hover:border-pharma-teal transition cursor-default">
                <span className="block font-bold text-white">GLP</span>
                <span className="text-xs">Certified Lab</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Roxane Laboratories Pvt. Ltd. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
