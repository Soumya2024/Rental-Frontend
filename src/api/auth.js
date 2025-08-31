import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000',
});

export const register = (data) => API.post('/auth/register', data);
export const login = (data) => API.post('/auth/login', data);
// export const profile = (data) => API.post('/auth/profile', data);
export const profile = (token) =>
  API.get('/auth/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const forgotPassword = (data) => API.post('auth/forgot-password', data);

export const resetPassword = (data) => API.post('auth/reset-password', data);

export const deleteProfile = (token) => API.delete('/auth/delete_profile', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const sendResetEmail = (data) => API.post('auth/send-reset-email', data);
export const resendOTP = (data) => API.post('auth/resend-otp', data);
