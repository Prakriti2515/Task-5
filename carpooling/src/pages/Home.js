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
      <section className="home-search">
        <h1>Find Your Ride</h1>
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <button>Search</button>
      </section>

      <section className="famous-rides">
        <h2>SOME FAMOUS RIDES</h2>
        <hr />
      </section>

      <section className="ride-cards">
        {rides.map((ride, index) => (
          <RideCard key={index} {...ride} />
        ))}
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>We connect carpoolers with similar destinations to save costs, reduce pollution, and make travel easier.</p>
      </section>

      <section className="customer-reviews">
        <h2>What Our Users Say</h2>
        <div>
          <div className="review-card">
            <h3>Aman Sir</h3>
            <p>"I found a perfect carpool for my trip to the boys hostel. It was safe, affordable, and comfortable!"</p>
          </div>
          <div className="review-card">
            <h3>Mithanshu Sir</h3>
            <p>"Carpooling saved me a lot of money. I booked it daily when I went back to my room behind Ryan International School. Highly recommend!"</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
