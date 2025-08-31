// 


import { useState } from "react";
import { resetPassword } from "../api/auth";
import Input from "../components/Input";

export default function ResetPassword() {
  const [form, setForm] = useState({ token: "", otp: "", new_password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await resetPassword(form);
      setMessage("✅ Password reset successful!");
    } catch (err) {
      setMessage("❌ Error resetting password. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700">
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-white drop-shadow-md">
          🔐 Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white/90 mb-2">Token</label>
            <Input
              label="Token"
              name="token"
              placeholder="Enter reset token"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-white/90 mb-2">OTP</label>
            <Input
              label="OTP"
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-white/90 mb-2">New Password</label>
            <Input
              label="New Password"
              name="new_password"
              type="password"
              placeholder="Enter new password"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-white/90">{message}</p>
        )}
      </div>
    </div>
  );
}
