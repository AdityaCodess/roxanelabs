import {
  ArrowUpRight,
  Box,
  DollarSign,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Welcome back, MedLife Distributors
          </h1>
          <p className="text-gray-500">
            Here is what's happening with your inventory today.
          </p>
        </div>
        <button className="bg-pharma-blue text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition shadow-md">
          + New Order
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Orders (Oct)
              </p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">₹12.5L</h3>
            </div>
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <DollarSign size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <ArrowUpRight size={16} className="mr-1" />
            <span>+12% from last month</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Orders</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">8</h3>
            </div>
            <div className="p-2 bg-blue-50 text-pharma-blue rounded-lg">
              <Box size={20} />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            2 Dispatched, 6 Processing
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Top Selling</p>
              <h3 className="text-lg font-bold text-slate-800 mt-2">
                RoxCip-500
              </h3>
            </div>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">5000 units ordered</div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Low Stock Alert
              </p>
              <h3 className="text-lg font-bold text-rose-600 mt-2">
                CoughRox Syp
              </h3>
            </div>
            <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
              <AlertCircle size={20} />
            </div>
          </div>
          <div className="mt-4 text-sm text-rose-600 font-medium cursor-pointer hover:underline">
            Reorder Now &rarr;
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">
            Recent Order Status
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                {
                  id: "#ORD-7782",
                  prod: "RoxCip-500 x 50 Boxes",
                  date: "Oct 24, 2025",
                  amt: "₹12,500",
                  status: "Shipped",
                },
                {
                  id: "#ORD-7781",
                  prod: "RoxMol-650 x 100 Boxes",
                  date: "Oct 23, 2025",
                  amt: "₹8,200",
                  status: "Processing",
                },
                {
                  id: "#ORD-7780",
                  prod: "RoxVit-Z Syrup x 200",
                  date: "Oct 22, 2025",
                  amt: "₹15,000",
                  status: "Delivered",
                },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-medium text-pharma-blue">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-slate-700">{order.prod}</td>
                  <td className="px-6 py-4 text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 font-medium text-slate-800">
                    {order.amt}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
