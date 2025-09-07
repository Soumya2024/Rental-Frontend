import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import RentalForm from "./pages/Rental";
import RentalRead from "./pages/RentalRead";
import RentalUpdate from "./pages/RentalUpdate";
import RentalDelete from "./pages/RentalDelete";


function App() {
  return (
    
    <Router className='lg:max-w-screen bg-black'>
      <div className="max-w-screen-lg mx-auto p-4 bg-black">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rentals" element={<RentalForm />} />
          <Route path="/rentals/:id" element={<RentalRead />} />
          <Route path="/rentals/:id/update" element={<RentalUpdate />} />
          <Route path="/rentals/:id/delete" element={<RentalDelete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
