import React from "react";

const RideCard = ({ from, to, price, time, image }) => {
  return (
    <>
    
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px", maxWidth: "300px" }}>
      <img src={image || "placeholder.jpg"} alt="Ride" style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{from} to {to}</h3>
      <p>Price: {price}</p>
      <p>Time: {time}</p>
    </div>
    </>
  );
};

export default RideCard;
