export default function TransactionLimitsCard() {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-1">Transaction Limits</h2>
      <p className="text-sm text-gray-400 mb-6">
        Set minimum and maximum transaction amounts
      </p>

      {/* Deposit */}
      <Section title="Deposit Limits">
        <LimitInput label="Minimum (₹)" />
        <LimitInput label="Maximum (₹)" />
      </Section>

      {/* Withdrawal */}
      <Section title="Withdrawal Limits">
        <LimitInput label="Minimum (₹)" />
        <LimitInput label="Maximum (₹)" />
        <LimitInput label="Withdrawal Fee (₹)" />
      </Section>

      {/* Current Limits */}
      <div className="mt-6 bg-black/40 border border-white/10 rounded-xl p-4 text-sm">
        <p className="font-medium mb-1">Current Limits:</p>
        <p>Deposit: ₹100 – ₹100,000</p>
        <p>Withdrawal: ₹500 – ₹50,000</p>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function LimitInput({ label }) {
  return (
    <div>
      <label className="text-sm text-gray-400">{label}</label>
      <input
        className="w-full mt-1 px-4 py-2 rounded-lg
        bg-black/40 border border-white/10 outline-none"
      />
    </div>
  );
}
