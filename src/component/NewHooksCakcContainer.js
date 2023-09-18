import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/CakeAction";
const NewHooksCakcContainer = () => {
  const [ number, setNumber ] = useState(1);


  const state = useSelector((state) => state.cake.numberOfCakes);
  const btn = useDispatch();
  return (
    <div>
      <h1>number of cakc${state}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => btn(buyCake(number))}>buy {number} one </button>
    </div>
  );
};

export default NewHooksCakcContainer;
