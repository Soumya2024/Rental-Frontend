// // import { useEffect, useState } from 'react';
// // import { getProfile } from '../api/auth';

// // export default function Profile() {
// //   const [profile, setProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         // Get token from localStorage
// //         const token = localStorage.getItem('token');

// //         if (!token) {
// //           alert('No token found. Please login first.');
// //           return;
// //         }

// //         // Call API to get profile data with token
// //         const res = await getProfile(token);

// //         setProfile(res.data);
// //       } catch (error) {
// //         alert('Failed to fetch profile: ' + error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProfile();
// //   }, []);

// //   if (loading) return <p>Loading profile...</p>;
// //   if (!profile) return <p>No profile data.</p>;

// //   return (
// //     <div>
// //       <h1>Welcome, {profile.name}</h1>
// //       <p>Email: {profile.email}</p>
// //       {/* render other profile info */}
// //     </div>
// //   );
// // }









// import { useEffect, useState } from 'react';
// import { getProfile } from '../api/auth';

//   export default function Profile() {
//     // 🔹 Static mock data
//     const profile = {
//       email: "john.doe@example.com",
//       phone: "+91 9876543210",
//       registered_ip: "192.168.1.5",
//       system_ip: "192.168.1.10",
//       network_ip: "10.0.0.2",
//       registered_city: "Kolkata",
//       browser_fingerprint: "8f2c3a9d0e1b7f6g"
//     };
  
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-green-200 to-yellow-100 relative overflow-hidden">
//         {/* Background glow orbs */}
//         <div className="absolute top-16 left-20 w-56 h-56 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
//         <div className="absolute bottom-16 right-20 w-64 h-64 bg-green-400 rounded-full blur-3xl opacity-30"></div>
  
//         {/* Profile Card */}
//         <div className="relative z-10 w-full max-w-2xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-yellow-200 p-10">
//           <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 drop-shadow-md">
//             Security Profile
//           </h1>
  
//           {/* Info Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-5 rounded-xl bg-gradient-to-r from-yellow-100 to-green-100 shadow-lg hover:shadow-2xl transition duration-300">
//               <p className="text-gray-600 text-sm">Email</p>
//               <p className="text-gray-900 font-semibold">{profile.email}</p>
//             </div>
  
//             <div className="p-5 rounded-xl bg-gradient-to-r from-green-100 to-yellow-100 shadow-lg hover:shadow-2xl transition duration-300">
//               <p className="text-gray-600 text-sm">Phone</p>
//               <p className="text-gray-900 font-semibold">{profile.phone}</p>
//             </div>
  
//             <div className="p-5 rounded-xl bg-gradient-to-r from-yellow-50 to-green-50 shadow-lg hover:shadow-2xl transition duration-300">
//               <p className="text-gray-600 text-sm">Registered IP</p>
//               <p className="text-gray-900 font-semibold">{profile.registered_ip}</p>
//             </div>
  
//             <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-yellow-50 shadow-lg hover:shadow-2xl transition duration-300">
//               <p className="text-gray-600 text-sm">System IP</p>
//               <p className="text-gray-900 font-semibold">{profile.system_ip}</p>
//             </div>
  
//             <div className="p-5 rounded-xl bg-gradient-to-r from-yellow-100 to-green-50 shadow-lg hover:shadow-2xl transition duration-300">
//               <p className="text-gray-600 text-sm">Network IP</p>
//               <p className="text-gray-900 font-semibold">{profile.network_ip}</p>
//             </div>
  
//             <div className="p-5 rounded-xl bg-gradient-to-r from-green-100 to-yellow-100 shadow-lg hover:shadow-2xl transition duration-300">
//               <p className="text-gray-600 text-sm">Registered City</p>
//               <p className="text-gray-900 font-semibold">{profile.registered_city}</p>
//             </div>
  
//             <div className="col-span-1 md:col-span-2 p-5 rounded-xl bg-gradient-to-r from-yellow-200 to-green-200 shadow-lg hover:shadow-2xl transition duration-300">
//               <p className="text-gray-600 text-sm">Browser Fingerprint</p>
//               <p className="text-gray-900 font-semibold break-all">
//                 {profile.browser_fingerprint}
//               </p>
//             </div>
//           </div>
  
//           {/* Action Button */}
//           <div className="mt-8 flex justify-center">
//             <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-green-400 text-gray-900 font-semibold shadow-[0_6px_0px_#b8860b] hover:translate-y-1 hover:shadow-[0_3px_0px_#b8860b] transition-all duration-200">
//               Download Report
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   // const [profile, setProfile] = useState(null);
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   const fetchProfile = async () => {
//   //     try {
//   //       const token = localStorage.getItem('token');
//   //       if (!token) {
//   //         alert('No token found. Please login first.');
//   //         return;
//   //       }

//   //       const res = await getProfile(token);
//   //       setProfile(res.data);
//   //     } catch (error) {
//   //       alert('Failed to fetch profile: ' + error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
//   //   fetchProfile();
//   // }, []);

// //   if (loading)
// //     return (
// //       <div className="flex h-screen items-center justify-center text-gray-200">
// //         <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-400"></div>
// //       </div>
// //     );

// //   if (!profile)
// //     return (
// //       <div className="flex h-screen items-center justify-center text-gray-200">
// //         <p>No profile data.</p>
// //       </div>
// //     );

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-green-200 to-yellow-100 relative overflow-hidden">
// //       {/* Floating glows */}
// //       <div className="absolute top-20 left-20 w-56 h-56 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
// //       <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-400 rounded-full blur-3xl opacity-30"></div>

// //       {/* Profile Card */}
// //       <div className="relative z-10 w-full max-w-lg bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-yellow-200 p-10">
// //         {/* Avatar */}
// //         <div className="flex flex-col items-center">
// //           <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-yellow-400 to-green-400 flex items-center justify-center text-4xl font-bold text-white shadow-[0_8px_20px_rgba(255,215,0,0.6)]">
// //             {profile.name.charAt(0).toUpperCase()}
// //           </div>
// //           <h1 className="mt-4 text-3xl font-bold text-gray-800 drop-shadow-md">
// //             {profile.name}
// //           </h1>
// //           <p className="text-gray-600">{profile.email}</p>
// //         </div>

// //         {/* Info Section */}
// //         <div className="mt-8 space-y-4">
// //           <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-100 to-green-100 shadow-lg hover:shadow-xl transition duration-300">
// //             <p className="text-gray-700">
// //               <span className="font-semibold">Email:</span> {profile.email}
// //             </p>
// //           </div>

// //           {profile.phone && (
// //             <div className="p-4 rounded-xl bg-gradient-to-r from-green-100 to-yellow-100 shadow-lg hover:shadow-xl transition duration-300">
// //               <p className="text-gray-700">
// //                 <span className="font-semibold">Phone:</span> {profile.phone}
// //               </p>
// //             </div>
// //           )}

// //           {profile.role && (
// //             <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-green-50 shadow-lg hover:shadow-xl transition duration-300">
// //               <p className="text-gray-700">
// //                 <span className="font-semibold">Role:</span> {profile.role}
// //               </p>
// //             </div>
// //           )}
// //         </div>

// //         {/* Action Button */}
// //         <div className="mt-8 flex justify-center">
// //           <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-green-400 text-gray-900 font-semibold shadow-[0_6px_0px_#b8860b] hover:translate-y-1 hover:shadow-[0_3px_0px_#b8860b] transition-all duration-200">
// //             Edit Profile
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }














import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { profile } from "../api/auth";
import './Profile.css';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('No token found. Please login first.');
          navigate('/login');
          return;
        }

        const res = await profile(token);

        if (res?.data) {
          setProfile(res.data);
        } else {
          // fallback if no backend data
          setProfile(null);
        }
      } catch (error) {
        console.error(error);
        setProfile(null);
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

  const user = profile || staticProfile;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">Welcome, {user.name || "Guest"}</h1>
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
