import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_tee } from "../redux/tee/teeAction";
const HooksteeContainer = () => {
  const state = useSelector((state) => state.tee.numperOfTee);
  const btn = useDispatch();
  return (
    <div>
      <h1>number of ice${state}</h1>
      <button onClick={() => btn(buy_tee())}>buy one </button>
    </div>
  );
};

export default HooksteeContainer;
