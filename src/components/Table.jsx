import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

 
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products") // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  const handleRowClick = (item) => {
    navigate(`/item/${item.id}`, { state: { item } });
  };

  return (
    <div className="table-container">
    <table className="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => handleRowClick(item)}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
