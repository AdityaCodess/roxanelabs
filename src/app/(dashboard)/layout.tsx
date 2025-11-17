import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  FileText,
  LogOut,
  Settings,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR */}
      <aside className="w-64 bg-pharma-blue text-white hidden md:flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-blue-800">
          <h2 className="text-2xl font-bold tracking-tight">
            ROXANE <span className="text-pharma-teal">DISTRIB</span>
          </h2>
          <p className="text-xs text-blue-200 mt-1">Partner Portal v2.0</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 bg-blue-800/50 rounded-lg text-white font-medium border-l-4 border-pharma-teal"
          >
            <LayoutDashboard size={20} />
            Overview
          </Link>
          <Link
            href="/dashboard/orders"
            className="flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-800/30 hover:text-white rounded-lg transition"
          >
            <ShoppingCart size={20} />
            My Orders
          </Link>
          <Link
            href="/dashboard/inventory"
            className="flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-800/30 hover:text-white rounded-lg transition"
          >
            <Package size={20} />
            Stock Check
          </Link>
          <Link
            href="/dashboard/invoices"
            className="flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-800/30 hover:text-white rounded-lg transition"
          >
            <FileText size={20} />
            Invoices
          </Link>
        </nav>

        <div className="p-4 border-t border-blue-800">
          <button className="flex items-center gap-3 px-4 py-3 text-blue-200 hover:text-white w-full transition">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 md:ml-64 p-8">{children}</main>
    </div>
  );
}
