import React, { useState } from "react";
import { motion } from "framer-motion";
import { forgotPassword } from '../api/auth';

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/auth/forget_password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Password reset link sent to your email!");
      } else {
        setMessage(data.detail || "❌ Something went wrong!");
      }
    } catch (error) {
      setMessage("⚠️ Network error, try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-indigo-800 to-blue-900">
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md rounded-2xl p-8 shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20"
        style={{ transformStyle: "preserve-3d" }}
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-white drop-shadow-md">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white/90 mb-2">Email Address</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95, rotateX: 10 }}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </motion.button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm text-white/90"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default ForgetPassword;
