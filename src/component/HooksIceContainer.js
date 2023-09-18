import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_icecream } from "../redux/iceCream/iceAction";

const HooksIceContainer = () => {
  const state = useSelector((state) => state.ice.numperOfIce);
  const btn = useDispatch();
  return (
    <div>
      <h1>number of ice${state}</h1>
      <button onClick={() => btn(buy_icecream())}>buy one </button>
    </div>
  );
};

export default HooksIceContainer;
