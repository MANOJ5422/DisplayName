import React, { useState } from "react";
function FullNameDisplay() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Set full name if both fields are filled
      if (firstName && lastName) {
        setFullName(`${firstName} ${lastName}`);
      }
    };
  
    return (
      <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {fullName && (
          <div>
            <h2>Full Name: {fullName}</h2>
          </div>
        )}
      </div>
    );
  }
  
  export default FullNameDisplay;