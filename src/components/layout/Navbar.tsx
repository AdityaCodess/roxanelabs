"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Updated to use slate-900 instead of the missing pharma-blue
  const isActive = (path: string) =>
    pathname === path
      ? "text-slate-900 font-bold"
      : "text-slate-500 hover:text-slate-900";

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. LOGO -> LINKS TO HOME */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center cursor-pointer group"
          >
            <span className="text-2xl font-bold text-slate-900 tracking-tight group-hover:opacity-80 transition">
              ROXANE <span className="text-teal-600">LABS</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${isActive("/")} font-medium transition`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${isActive("/about")} font-medium transition`}
            >
              Who We Are
            </Link>
            <Link
              href="/products"
              className={`${isActive("/products")} font-medium transition`}
            >
              Products
            </Link>
            <Link
              href="/manufacturing"
              className={`${isActive("/manufacturing")} font-medium transition`}
            >
              Manufacturing
            </Link>
            <Link
              href="/contact"
              className={`${isActive("/contact")} font-medium transition`}
            >
              Contact
            </Link>
          </div>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-slate-500 hover:text-slate-900 transition cursor-pointer">
              <Search size={20} />
            </button>

            {/* FIXED LOGIN BUTTON */}
            <Link
              href="/login"
              className="flex items-center gap-2 px-5 py-2 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition shadow-md hover:shadow-lg cursor-pointer"
            >
              <UserCircle size={18} />
              Partner Login
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              Who We Are
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              Products
            </Link>
            <Link
              href="/manufacturing"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              Manufacturing
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 bg-slate-900 hover:bg-slate-800 transition text-white rounded-lg font-bold shadow-sm"
              >
                Distributor Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
