export default function AlternativePaymentMethods() {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-semibold mb-1">
        Alternative Payment Methods
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Configure additional payment options
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MethodCard
          title="UPI Payments"
          description="Enable UPI payment method"
        />

        <MethodCard
          title="Net Banking"
          description="Enable net banking option"
        />

        <MethodCard
          title="Wallet Payments"
          description="Enable wallet payments (Paytm, PhonePe)"
        />
      </div>
    </div>
  );
}

function MethodCard({ title, description }) {
  return (
    <div className="bg-black/40 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-blue-500/30 transition">
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray-400">{description}</p>
      </div>

      {/* Toggle */}
      <input type="checkbox" className="toggle" />
    </div>
  );
}
