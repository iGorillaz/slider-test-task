import React from "react";
import { SlideContext } from "../Slider/Slider";
import { useContext } from "react";
import Coin from "../Coin/Coin";
import s from "./Coins.module.css";

const Coins = () => {
  const { coins } = useContext(SlideContext);

  const renderCoins = () => {
    const res = [];
    for (let i = 0; i < coins.length; i++) {
      res.push(<Coin key={coins[i].id} number={i} name={coins[i].name} />);
    }
    return res;
  };

  return <div className={s.coins}>{renderCoins()}</div>;
};

export default Coins;
