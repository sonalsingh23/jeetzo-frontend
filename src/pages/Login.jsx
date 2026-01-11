import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/auth.service";
import { User, Lock } from "lucide-react";
// import backgroundImage from "../assests/img1.jpg";
import backgroundVideo from "../assests/86462-593059278_small.mp4";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginAdmin({ email, password });

      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Login Card */}
    <div className="relative z-10 w-full max-w-lg p-12 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/20 shadow-2xl transition-all hover:scale-[1.02]">
      
      <h1 className="text-4xl font-extrabold text-center text-pink-400 mb-10 tracking-widest">
        JEETZO ADMIN LOGIN
      </h1>

      {error && (
        <p className="text-red-400 text-sm mb-6 text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="relative mb-8">
          <label className="text-gray-300 text-sm block mb-3">
            User Name or Email
          </label>

          <div className="flex items-center gap-3">
            <User className="text-pink-400" />
            <input
              type="email"
              placeholder="User Name or email..."
              className="w-full px-4 py-3 bg-transparent text-white border-b-2 border-white/40 focus:border-pink-400 focus:outline-none placeholder:text-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="relative mb-12">
          <label className="text-gray-300 text-sm block mb-3">
            Password
          </label>

          <div className="flex items-center gap-3">
            <Lock className="text-pink-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-transparent text-white border-b-2 border-white/40 focus:border-pink-400 focus:outline-none placeholder:text-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl text-white font-bold tracking-widest shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all disabled:opacity-50"
        >
          {loading ? "AUTHENTICATING..." : "LOGIN"}
        </button>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-xs">
            © 2025 Gaming Login form. All Rights Reserved | Design by Sonal
          </p>
        </div>
      </form>
    </div>
  </div>
);

};

export default Login;
