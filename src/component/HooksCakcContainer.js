import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {buyCake} from '../redux/cake/CakeAction'
const HooksCakcContainer = () => {
  const state = useSelector((state) =>  state.cake.numberOfCakes);
  const btn = useDispatch();
  return (
    <div>
      <h1>number of cakc${state}</h1>
      <button onClick={()=>btn(buyCake())}>buy one </button>
    </div>
  );
};

export default HooksCakcContainer;
