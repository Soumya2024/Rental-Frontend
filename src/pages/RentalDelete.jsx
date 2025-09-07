import React, { useState } from "react";
import { deleteRental } from "../api/auth";
import "./rentalDelete.css";

export default function RentalDelete({ rentalId }) {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      await deleteRental(rentalId, token);  
      setMessage("Rental deleted successfully!");
    } catch (err) {
      setMessage(err.response?.data?.detail || "Error deleting rental");
    }
  };

  return (
    <div className="delete-page">
      <div className="background">
        {[...Array(10)].map((_, i) => (
          <div className="sphere" key={i} style={{ "--i": i + 1 }}></div>
        ))}
      </div>

      <div className="delete-card-container">
        <div className="delete-card">
          <h2>🗑 Delete Rental</h2>
          <p>Are you sure you want to delete this rental? This action cannot be undone.</p>
          <button className="delete-btn" onClick={handleDelete}>
            Delete Rental
            </button>
            {message && <p className="delete-message">{message}</p>}
          <span>Click delete to confirm your action</span>
        </div>
      </div>
    </div>
  );
}