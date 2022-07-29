import React from "react";
import { useState, createContext } from "react";
import { initalState } from "../../utils/data";
import Coins from "../Coins/Coins";
import s from "./Slider.module.css";

export const SlideContext = createContext();

const Slider = () => {
  const [coinsList, setCoinsList] = useState(initalState);
  const [activeItem, setActiveItem] = useState(0);

  const moveToItem = (position = 1) => {
    setActiveItem(position % coinsList.length);
  };

  const changeItem = (position = 1) => {
    let itemNum = 0;

    if (activeItem + position < 0) {
      itemNum = coinsList.length - 1;
    } else {
      itemNum = (activeItem + position) % coinsList.length;
    }
    setActiveItem(itemNum);
  };

  return (
    <div className={s.container}>
      <span className={s.text}>Currency:</span>
      <div className={s.btn} onClick={() => changeItem(-1)}>
        <span>{"<"}</span>
      </div>
      <SlideContext.Provider
        value={{
          moveToItem,
          changeItem,
          coins: coinsList,
          coinsCount: coinsList.length,
          itemNum: activeItem,
        }}>
        <Coins />
      </SlideContext.Provider>
      <div className={s.btn} onClick={() => changeItem(1)}>
        <span>{">"}</span>
      </div>
    </div>
  );
};

export default Slider;
