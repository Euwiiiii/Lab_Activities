import "./TalentForm.css";
import React, { useState } from "react";

// 1st Function 
const TalentForm = () => {
    const [formData, setFormData] = useState ({
        name: "",
        age: "",
        email: "",
        talent: ""
    });

// Real-time changes
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData ({
        ...formData,
        [name]: value
    });
};


// Console log form data on submit
const handleSubmit = (e) => {
    e.preventDefault(); //para di magreload
    
    if (!formData.talent) {
        alert("Please select a talent before submitting!");
        return;
    }
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");

    setFormData({//para 
        name: "",
        age: "",
        email: "",
        talent: ""
    });
};

return (  
    <div className= "form-container">
        <h1> Talent Form for PUPBC</h1>
        <p> Fill out the details below if your interested</p>
    <form onSubmit={handleSubmit}>
        
        {/* Name Input Field */}
        <div className="form-field">
            <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
        />
        </div>
       {/* age Input Field */}
        <div className="form-field">
            <label htmlFor="age">Age:</label>
            <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                required
            />
        </div>
        {/* Email Input Field */}
        <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>
        {/* Talent Input Field */}
        <div className="form-field">
            <label htmlFor="talent">Talent:</label>
            <select
                id="talent"
                name="talent"
                value={formData.talent}
                onChange={handleChange}
                required
            >
                <option value="">Select your talent</option>
                <option value="Singing">Singing</option>
                <option value="Dancing">Dancing</option>
                <option value="Poetry">Poetry</option>
                
            </select>
        </div>
        {/* Submit Button */}
        <div>
            <button type="submit" className="submit-btn">
                Submit
            </button>
        </div>
    </form>
    </div>
  );
};

export default TalentForm;