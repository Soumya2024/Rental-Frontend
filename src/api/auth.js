import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
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
export const createRental = (data, file, token) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  if (file) formData.append("file", file);

  return API.post("/rentals/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getRental = (id, token) => API.get(`/rentals/${id}/`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const updateRental = (id, data, file, token) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  if (file) formData.append("file", file);

  return API.put(`/rentals/${id}/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};


export const deleteRental = (id, token) => API.delete(`/rentals/${id}/`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const sendResetEmail = (data) => API.post('auth/send-reset-email', data);
export const resendOTP = (data) => API.post('auth/resend-otp', data);
