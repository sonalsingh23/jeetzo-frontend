export default function PayUGatewayCard() {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-1">PayU Gateway</h2>
      <p className="text-sm text-gray-400 mb-6">
        Configure PayU payment integration
      </p>

      {/* Enable Toggle */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="font-medium">Enable PayU</p>
          <p className="text-xs text-gray-400">
            Activate PayU payment gateway
          </p>
        </div>
        <input type="checkbox" className="toggle" />
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <Input label="Merchant Key" placeholder="Enter merchant key" />
        <Input label="Salt Key" placeholder="••••••••••••" />
        <Select label="Mode">
          <option>Live Mode</option>
          <option>Test Mode</option>
        </Select>
      </div>

      {/* Current Config */}
      <div className="mt-6 bg-[#0b1220] border border-blue-500/30 rounded-xl p-4 text-sm">
        <p className="text-blue-400 font-medium mb-1">Current Configuration:</p>
        <p>Merchant Key: HYukr</p>
        <p>Mode: LIVE</p>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm text-gray-400">{label}</label>
      <input
        {...props}
        className="w-full mt-1 px-4 py-2 rounded-lg
        bg-black/40 border border-white/10 outline-none"
      />
    </div>
  );
}

function Select({ label, children }) {
  return (
    <div>
      <label className="text-sm text-gray-400">{label}</label>
      <select
        className="w-full mt-1 px-4 py-2 rounded-lg
        bg-black/40 border border-white/10 outline-none"
      >
        {children}
      </select>
    </div>
  );
}
