import React, { useState } from "react";
import axios from "axios";
import '../src/style.css';

import AddUser from "./Components/AddUser";
import TableData from "./Components/TableData";
const token =
  "eb326e6640cf1329014df268b432189f8b3ee8e575a9d0ee2fec26f9b40ea0dd";

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios({
      method: "get",
      url: `https://gorest.co.in/public/v2/users`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.data)
      .then((response) => {
        setData(response);
      });
  };

  const handleDeleteData = (id) => {
    if (window.confirm("You are about to Delete the record. Are you Sure?")) {
      axios({
        method: "delete",
        url: `https://gorest.co.in/public/v2/users/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(() => {
        fetchData();
      });
    } else {
      return;
    }
  };
  const handleUpdateData = (id) => {
    axios({
      method: "put",
      url: `https://gorest.co.in/public/v2/users/${id}`,
      body: {
        data,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(() => {
      alert("Update API called successfully");
    });
  };

  return (
    <div className="main-container">
      <h1>CRUD APP USING REST API</h1>
          <AddUser data={data} fetchData={fetchData} />

      <TableData
        fetchData={fetchData}
        data={data}
        handleDeleteData={handleDeleteData}
        handleUpdateData={handleUpdateData}
      />
    </div>
  );
};

export default App;
