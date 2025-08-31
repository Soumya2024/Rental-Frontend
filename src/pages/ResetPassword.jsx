// import { useState } from "react";
// import axios from "axios";

// const ResetPassword = () => {
//   const [email, setEmail] = useState("");

//   const handleSendOTP = async () => {
//     try {
//       await axios.post("http://localhost:8000/send-reset-email", { email });
//       alert("Reset email sent");
//     } catch {
//       alert("Error sending email");
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto mt-20">
//       <h2 className="text-lg mb-4">Reset Password</h2>
//       <input
//         type="email"
//         placeholder="Your email"
//         className="border w-full p-2 mb-4"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleSendOTP} className="bg-blue-600 text-white w-full p-2 rounded">
//         Send Reset Link
//       </button>
//     </div>
//   );
// };

// export default ResetPassword;
