import { useState } from "react";
import { Link } from "react-router";
import OrderDetailModal from "./OrderDetailModal";

const orders = [
  {
    id: "ORD-1001",
    date: "2026-01-22",
    status: "Delivered",
    total: 129.99,
    items: 3,
  },
  {
    id: "ORD-1002",
    date: "2026-01-20",
    status: "Processing",
    total: 79.5,
    items: 1,
  },
  {
    id: "ORD-1003",
    date: "2026-01-18",
    status: "Cancelled",
    total: 49.99,
    items: 2,
  },
];

const statusColor = {
  Delivered: "bg-green-100 text-green-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

const OrderHistory = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Order History</h1>

      {orders.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          You haven’t placed any orders yet.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="text-left px-6 py-4">Order ID</th>
                <th className="text-left px-6 py-4">Date</th>
                <th className="text-left px-6 py-4">Items</th>
                <th className="text-left px-6 py-4">Total</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-right px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4">{order.items}</td>
                  <td className="px-6 py-4 font-semibold">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusColor[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setSelectedOrder(order.id)}
                      className="text-blue-600 hover:underline"
                    >
                      View details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default OrderHistory;
