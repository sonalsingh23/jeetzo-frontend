import PayUGatewayCard from "../components/PayUGatewayCard .jsx";
import TransactionLimitsCard from "../components/TransactionLimitsCard .jsx";
import AlternativePaymentMethods from "../components/AlternativePaymentMethods.jsx";

export default function PaymentSettings() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold">Payment Settings</h1>
      <p className="text-gray-400 mt-1">
        Configure payment gateway and transaction limits
      </p>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <PayUGatewayCard />
        <TransactionLimitsCard />
      </div>

      {/* ALTERNATIVE METHODS */}
      <AlternativePaymentMethods />

      {/* SAVE BUTTON */}
      <div className="mt-8 flex justify-start">
        <button
          className="px-6 py-2 rounded-xl font-semibold
          bg-gradient-to-r from-blue-600 to-indigo-600
          hover:opacity-90 transition"
        >
          💾 Save Settings
        </button>
      </div>
    </div>
  );
}
