import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { profile as fetchProfileAPI } from "../api/auth";
import './Profile.css';

export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false); // new state for fallback
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("Token being sent:", token);
        if (!token) {
          alert('No token found. Please login first.');
          navigate('/login');
          return;
        }

        const res = await fetchProfileAPI(token);

        if (res?.data) {
          setUserProfile(res.data);
          setIsFallback(false);
        } else {
          setUserProfile(null);
          setIsFallback(true);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setUserProfile(null);
        setIsFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) return <div className="loader">Loading profile...</div>;

  // fallback static data
  const staticProfile = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    registered_ip: "192.168.1.10",
    system_ip: "10.0.0.5",
    network_ip: "172.16.0.2",
    registered_city: "Kolkata",
    browser_fingerprint: "AB12-CD34-EF56"
  };

  const user = userProfile || staticProfile;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">
          Welcome, {user.name || "Guest"} {isFallback && "(Fallback Data)"}
        </h1>
        <div className="profile-details">
          <p><span>Email:</span> {user.email}</p>
          <p><span>Phone:</span> {user.phone}</p>
          <p><span>Registered IP:</span> {user.registered_ip}</p>
          <p><span>System IP:</span> {user.system_ip}</p>
          <p><span>Network IP:</span> {user.network_ip}</p>
          <p><span>City:</span> {user.registered_city}</p>
          <p><span>Browser Fingerprint:</span> {user.browser_fingerprint}</p>
        </div>
      </div>
    </div>
  );
}
