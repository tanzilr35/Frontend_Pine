import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Viral Destination in Indonesia</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/bromo.jpg" text='Mengejar matahari "The Golden Sunrise of Bromo"' label="Mountains" path="/content/Mountain" />
            <CardItem src="images/toba.jpg" text="The Beauty of Giant Kaldera, Toba Lake" label="Lakes" path="/content/Lake" />
          </ul>
          <ul className="cards__items">
            <CardItem src="images/kanto.jpg" text="Healing with Nature in Air Terjun Kanto Lampo, Bali" label="Waterfalls" path="/content/Waterfall" />
            <CardItem src="images/labuan.jpg" text="Pink Beach, Komodo Islands Indonesia Little Slice of Paradise" label="Beach" path="/content/Beach" />
            <CardItem src="images/ubud.jpg" text="Lift to Heaven at The Royal Pita Maha, Ubud-Bali" label="Parks & Forest" path="/content/ParkForest" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
