// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { setToken } from "../auth";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/login", {
//         email,
//         password,
//       });
//       setToken(res.data.access_token);
//       navigate("/dashboard");
//     } catch (err) {
//       alert("Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10 p-4 shadow-lg rounded bg-white">
//       <h2 className="text-xl mb-4">Login</h2>
//       <input
//         type="email"
//         className="border p-2 w-full mb-4"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         className="border p-2 w-full mb-4"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button className="bg-blue-500 text-white px-4 py-2 w-full rounded" type="submit">
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;
