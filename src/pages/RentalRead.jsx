// import React, { useEffect, useState } from "react";
// import { getRental } from "../api/auth";
// import "./rentalRead.css";

// export default function RentalRead({ rentalId }) {
//   const [rental, setRental] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     getRental(rentalId, token)
//       .then(res => setRental(res.data))
//       .catch(err => console.log(err.response?.data));
//   }, [rentalId]);

//   if (!rental) return <div className="read-container">Loading...</div>;

//   return (
//     <div className="read-container">
//       <h2>📄 Rental Details</h2>
//       <div className="read-card">
//         <p><strong>Owner:</strong> {rental.owner_name}</p>
//         <p><strong>House:</strong> {rental.ren_house_name}</p>
//         <p><strong>Address:</strong> {rental.ren_house_add}</p>
//         <p><strong>Field:</strong> {rental.field_name}</p>
//         <p><strong>Issue:</strong> {rental.issue_description}</p>
//         {rental.ren_aadhar_pdf && (
//                                 <a
//                                     href={`http://localhost:8000/${rental.ren_aadhar_pdf}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     View Aadhaar PDF
//                                 </a>
//                                 )}
//       </div>
//     </div>
//   );
// }








import React, { useEffect, useState } from "react";
import { getRental } from "../api/auth"; // Your API call function
import "./rentalRead.css";

export default function RentalRead({ rentalId }) {
  const [rental, setRental] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!rentalId) {
      // Demo fallback if rentalId is missing
      setRental({
        owner_name: "John Doe",
        ren_house_name: "Sunset Villa",
        ren_house_add: "123 Main Street, City",
        field_name: "Water Leak",
        issue_description: "Leaking pipe in kitchen",
        ren_aadhar_pdf: null, // Can put "dummy.pdf" to test PDF link
      });
      return;
    }

    getRental(rentalId, token)
      .then(res => setRental(res.data))
      .catch(err => {
        console.log(err.response?.data);
        setError("Unable to fetch rental data.");
      });
  }, [rentalId]);

  if (error) return <div className="read-container">{error}</div>;
  if (!rental) return <div className="read-container">Loading...</div>;

  return (
    <div className="read-container">
      <h2>📄 Rental Details</h2>
      <div className="read-card">
        <p><strong>Owner:</strong> {rental.owner_name}</p>
        <p><strong>House:</strong> {rental.ren_house_name}</p>
        <p><strong>Address:</strong> {rental.ren_house_add}</p>
        <p><strong>Field:</strong> {rental.field_name}</p>
        <p><strong>Issue:</strong> {rental.issue_description}</p>
        {rental.ren_aadhar_pdf && (
          <a
            href={`http://localhost:8000/${rental.ren_aadhar_pdf}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Aadhaar PDF
          </a>
        )}
      </div>
    </div>
  );
}
