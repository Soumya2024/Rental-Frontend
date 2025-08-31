import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import Input from '../components/Input';

export default function Register() {
  const [form, setForm] = useState({ email: '', phone: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    alert('Registered successfully');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="relative w-full max-w-md p-8 rounded-3xl shadow-2xl 
                      backdrop-blur-xl bg-white/10 border border-white/20">
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-30"></div>

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Input
              label="Email"
              name="email"
              type="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Phone"
              name="phone"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Password"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
                       text-white font-semibold shadow-lg hover:scale-105 
                       transition-transform duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-center text-white/80 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-pink-300 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
