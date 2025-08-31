
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import Input from '../components/Input';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '', otp: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      const token = res.data.token;
      localStorage.setItem('token', token);
      navigate('/profile');
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-yellow-400 via-yellow-300 to-green-300 
                    relative overflow-hidden">
      {/* Floating glowing circles for 3D look */}
      <div className="absolute top-20 left-20 w-48 h-48 rounded-full bg-yellow-500 blur-3xl opacity-40 shadow-[inset_0_0_40px_rgba(255,255,200,0.9)]"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-green-400 blur-3xl opacity-40 shadow-[inset_0_0_40px_rgba(200,255,200,0.9)]"></div>

      <div className="relative w-full max-w-md p-10 rounded-3xl shadow-2xl 
                      bg-white/70 backdrop-blur-lg border border-yellow-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-700 drop-shadow-md">
          Golden Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Input
            label="OTP"
            name="otp"
            type="text"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-green-400 
                       text-gray-900 font-semibold shadow-[0_8px_0px_#b8860b] 
                       hover:translate-y-1 hover:shadow-[0_4px_0px_#b8860b] 
                       transition-all duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-700 mt-6">
          Don’t have an account?{' '}
          <a href="/register" className="text-green-700 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
