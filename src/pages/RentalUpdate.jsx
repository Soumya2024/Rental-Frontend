import React, { useState, useEffect } from "react";
import { updateRental } from "../api/auth";
import { getRental } from "../api/auth";
import "./rentalUpdate.css";

export default function RentalUpdate({ rentalId }) {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    getRental(rentalId, token)
    .then(res => setForm(res.data))
      .catch(err => console.log(err.response?.data));
  }, [rentalId]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await updateRental(rentalId, form, token);
      setMessage("Rental updated successfully!");
    } catch (err) {
      setMessage(err.response?.data?.detail || "Error updating rental");
    }
  };

  return (
    <div className="update-container">
      <h2>✏️ Update Rental</h2>
      <form onSubmit={handleSubmit} className="update-form">
        <input type="text" name="owner_name" value={form.owner_name || ""} onChange={handleChange} />
        <input type="text" name="ren_house_name" value={form.ren_house_name || ""} onChange={handleChange} />
        <input type="text" name="ren_house_add" value={form.ren_house_add || ""} onChange={handleChange} />
        <input type="text" name="field_name" value={form.field_name || ""} onChange={handleChange} />
        <textarea name="issue_description" value={form.issue_description || ""} onChange={handleChange}></textarea>
        <button type="submit">Update Rental</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
