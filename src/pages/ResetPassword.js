import { useState } from 'react';
import { resetPassword } from '../api/auth';
import Input from '../components/Input';

export default function ResetPassword() {
  const [form, setForm] = useState({ token: '', otp: '', new_password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPassword(form);
    alert('Password reset successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Token" name="token" onChange={handleChange} />
      <Input label="OTP" name="otp" onChange={handleChange} />
      <Input label="New Password" name="new_password" type="password" onChange={handleChange} />
      <button className="bg-purple-600 text-white px-4 py-2 rounded" type="submit">Reset Password</button>
    </form>
  );
}
