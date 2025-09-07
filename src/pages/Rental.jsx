import React, { useState } from "react";
import axios from "axios";
import "./Rental.css";

export default function RentalForm() {
  const [form, setForm] = useState({
    owner_name: "",
    ren_house_name: "",
    ren_house_add: "",
    field_name: "",
    issue_description: "",
    user_type: "tenant",
  });

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Get JWT token
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));
      if (file) formData.append("file", file);

      const res = await axios.post("http://localhost:8000/rentals/rentals", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Rental submitted successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err.response || err);
      setMessage(err.response?.data?.detail || "Error submitting rental");
    }
  };

  return (
    <div className="rental-container">
      <h2 className="rental-title">🏠 Submit Rental Request</h2>
      <form className="rental-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="owner_name"
          placeholder="Owner Name"
          value={form.owner_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ren_house_name"
          placeholder="House Name"
          value={form.ren_house_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ren_house_add"
          placeholder="House Address"
          value={form.ren_house_add}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="field_name"
          placeholder="Field Name"
          value={form.field_name}
          onChange={handleChange}
          required
        />
        <textarea
          name="issue_description"
          placeholder="Issue Description"
          value={form.issue_description}
          onChange={handleChange}
          required
        />
        <select name="user_type" value={form.user_type} onChange={handleChange}>
          <option value="tenant">Tenant</option>
          <option value="owner">Owner</option>
        </select>
        {form.user_type === "owner" && (
          <input type="file" name="file" onChange={handleFileChange} required />
        )}
        <button type="submit" className="rental-submit">
          Submit
        </button>
      </form>
      {message && <p className="rental-message">{message}</p>}
    </div>
  );
}
