import React from "react";
import { useContext } from "react";
import { SlideContext } from "../Slider/Slider";
import "./Coin.css";

const Coin = ({ number, name }) => {
  const { moveToItem, itemNum } = useContext(SlideContext);

  return (
    <div
      className={`coin ${itemNum === number ? "selected" : ""}`}
      onClick={() => moveToItem(number)}>
      {name}
    </div>
  );
};

export default Coin;
