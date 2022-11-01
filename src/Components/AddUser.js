import React, { useState } from "react";
import axios from "axios";

const AddUser = ({ fetchData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("Active");
  const token =
    "eb326e6640cf1329014df268b432189f8b3ee8e575a9d0ee2fec26f9b40ea0dd";
  var userData;

  const handlePostData = () => {
    axios({
      method: "post",
      url: "https://gorest.co.in/public/v2/users",
      data: {
        name: name,
        email: email,
        gender: gender,
        status: status,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        userData = res.data;
      })
      .then(() => {
        fetchData();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setGender("");
    setName("");
    setGender(gender);
    setStatus("Active");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label>Name:-</label>
        <input
          type="text"
          name="name"
          value={name}
          id="name"
          placeholder="John"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label>Email:-</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="John@gmail.com"
          required
        />
      </div>

      <div>
        <label>Gender:-</label>
        <input
          type="radio"
          name="radio"
          id="male"
          value="male"
          defaultChecked={true}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          name="radio"
          id="female"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <label>Status:-</label>
        <select onChange={(e) => setStatus(e.target.value)}>
          <option value="Active">Active</option>
          <option value="InActive">Inactive</option>
        </select>
      </div>

      <div>
        <button onClick={handlePostData}>Submit</button>
      </div>
    </form>
  );
};

export default AddUser;
