import React from "react";
import star from "../one-2-jan-22.png";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero--header">Welcome to our Auction house!</h1>
      <img src={star} className="hero--photo" />

      <p className="hero--text">
        In this exclusive place we'll launch super exclusive items for a super
        exclusive price...exclucively
      </p>
    </section>
  );
}
