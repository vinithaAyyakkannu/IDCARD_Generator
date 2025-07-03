import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    position: "",
    phone: "",
    email: "",
    website: "",
    address: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      if (files[0]) reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleReset = () => {
    setFormData({
      company: "",
      name: "",
      position: "",
      phone: "",
      email: "",
      website: "",
      address: "",
      photo: "",
    });
  };

  return (
    <div className="app-container">
      <div className="form-section">
        <h2>Company Details Form</h2>
        <form>
          <label>Company Name</label>
          <input name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" />

          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />

          <label>Position</label>
          <input name="position" value={formData.position} onChange={handleChange} placeholder="Position" />

          <label>Mobile</label>
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile" />

          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

          <label>Website</label>
          <input name="website" value={formData.website} onChange={handleChange} placeholder="Website" />

          <label>Address</label>
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />

          <label>Photo</label>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />

          <button type="button" onClick={handleReset}>Reset</button>
        </form>
      </div>

      <div className="id-card-preview">
        <div className="id-card">
          <div className="card-header">
            <h2 className="company-name">{formData.company || "Company Name"}</h2>
          </div>

          <div className="card-content">
            {formData.photo && <img src={formData.photo} alt="avatar" className="photo" />}
            <h3>{formData.name || "Your Name"}</h3>
            <p>{formData.position || "Job Title"}</p>

            <div className="info">
              <p>📞 {formData.phone}</p>
              <p>✉ {formData.email}</p>
              <p>🌐 {formData.website}</p>
              <p>📍 {formData.address}</p>
            </div>
          </div>

          <div className="card-footer">
            {formData.website && <p>{formData.website}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
