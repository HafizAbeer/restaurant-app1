import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex justify-content-center align-items-center text-center min-vh-100"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Welcome to Abeer's Restaurant
        </h1>
        <p style={{ fontSize: "1.25rem", marginTop: "10px" }}>
          Enjoy delicious meals and a memorable dining experience
        </p>
        <div className="button-group mt-4">
          <Button
            type="primary"
            className="m-2"
            size="large"
            style={{
              backgroundColor: "#ff4d4f",
              borderColor: "#ff4d4f",
              color: "white",
              fontSize: "18px",
            }}
          >
            <Link to="/menu" style={{ color: "white", textDecoration: "none" }}>
              See Our Menu
            </Link>
          </Button>
          <Button
            type="primary"
            className="m-2"
            size="large"
            style={{
              backgroundColor: "#ff4d4f",
              borderColor: "#ff4d4f",
              color: "white",
              fontSize: "18px",
            }}
          >
            <Link
              to="/order-details"
              style={{ color: "white", textDecoration: "none" }}
            >
              View Your Order
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
