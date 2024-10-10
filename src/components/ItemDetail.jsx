import React from "react";
import { useLocation ,useNavigate} from "react-router-dom";

const ItemDetail = () => {
  const { state } = useLocation();
  const { item } = state;
  const navigate = useNavigate()

  return (
    <div className="table-container">

      <h2>Item Details</h2>
      <p><strong>ID : </strong> {item.id}</p>
      <p><strong>Name :</strong> {item.title}</p>
      <p><strong>Description :</strong> {item.description}</p>
  
 
      <button className="btn-back"  onClick={() => {navigate(-1)}} >Back</button>
    </div>
  );
};

export default ItemDetail;
