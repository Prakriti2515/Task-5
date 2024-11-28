import React from "react";
import RideCard from "../components/RideCard";

const Home = () => {
  const rides = [
    { from: "CSIt", to: "BOYS HOSTEL", price: 10, time: "10:00 AM", image: "https://via.placeholder.com/250" },
    { from: "NLT's", to: "RYAN INTERNATIONAL", price: 20, time: "8:00 AM", image: "https://via.placeholder.com/250" },
    { from: "LT's", to: "GOVINDPURAM", price: 30, time: "6:00 PM", image: "https://via.placeholder.com/250" },
  ];

  return (
    <div>
      <section style={{ textAlign: "center", backgroundColor: "#f4f4f4", padding: "40px 20px" }}>
        <h1>Find Your Ride</h1>
        <input type="text" placeholder="From" style={{ padding: "10px", margin: "10px", borderRadius: "4px" }} />
        <input type="text" placeholder="To" style={{ padding: "10px", margin: "10px", borderRadius: "4px" }} />
        <button style={{ backgroundColor: "#4CAF50", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "4px" }}>
          Search
        </button>
      </section>

      {/* "Some Famous Rides" Heading with Style */}
      <section style={{ textAlign: "center", margin: "40px 0" }}>
        <h2 style={{
          fontSize: "36px", 
          color: "#fff", 
          background: "light-green", 
          padding: "10px 20px", 
          borderRadius: "5px", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
          SOME FAMOUS RIDE
        </h2>
        <hr style={{ width: '80%', margin: '20px auto', border: '1px solid #ddd' }} />
      </section>

      {/* Ride Cards Section */}
      <section style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
        {rides.map((ride, index) => (
          <RideCard key={index} {...ride} />
        ))}
      </section>

      {/* About Section */}
      <section style={{ backgroundColor: "#fff", padding: "40px 20px", textAlign: "center" }}>
        <h2>About Us</h2>
        <p>We connect carpoolers with similar destinations to save costs, reduce pollution, and make travel easier.</p>
      </section>

      {/* Customer Reviews */}
      <section style={{ backgroundColor: "#f4f4f4", padding: "40px 20px", textAlign: "center" }}>
        <h2>What Our Users Say</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div style={{ width: "300px", border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
            <h3>Aman Sir</h3>
            <p>"I found a perfect carpool for my trip to  boys hostel. It was safe, affordable, and comfortable!"</p>
          </div>
          <div style={{ width: "300px", border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
            <h3>Mithanshu Sir</h3>
            <p>"Carpooling saved me a lot of money  i booked it daily when i went back to my room behind the ryan international school. Highly recommend!"</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
