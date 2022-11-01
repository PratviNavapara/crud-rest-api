import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TableData = ({ fetchData, data, handleDeleteData, handleUpdateData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>USerID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
                <td className="action-btn"
                onClick={() => {
                  handleUpdateData(item.id);
                }}>
                  <EditIcon
                    
                  />
                </td>
                <td className="action-btn"
                  onClick={() => {
                    handleDeleteData(item.id);
                  }}
                >
                  <DeleteIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableData;
