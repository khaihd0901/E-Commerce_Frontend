const OrderDetailModal = ({ onClose }) => {
  let order = {
    id: "ORD-1001",
    date: "2026-01-22",
    status: "Delivered",
    total: 129.99,
    items: [
      { name: "iPhone Case", quantity: 1, price: 29.99 },
      { name: "USB Cable", quantity: 2, price: 50 },
    ],
  };

  if (!order) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      {/* Prevent closing when clicking inside */}
      <div
        className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Order Details</h2>

        {/* Order Info */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Order ID</span>
            <span className="font-medium">{order.id}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Date</span>
            <span>{order.date}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="font-medium">{order.status}</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Items */}
        <div>
          <h3 className="font-semibold mb-2">Items</h3>
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Total */}
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${order.total.toFixed(2)}</span>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
