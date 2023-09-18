import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/CakeAction";
import { buy_icecream } from "../redux/iceCream/iceAction";

const ItamComponaint = (props) => {
  return (
    <div>
      <h1>item- {props.item} </h1>
      <button onClick={props.dispatchFunction}> buy one</button>
    </div>
  );
};
const propState = (state, ownprps) => {
  const item = ownprps.cake ? state.cake.numberOfCakes : state.ice.numperOfIce;

  return {
    item: item,
  };
};

const dispatchitem=(dispatch,ownprps)=>{
const dispatchFunction=ownprps.ice?()=>dispatch(buy_icecream()):()=>dispatch(buyCake())
return {
  dispatchFunction:dispatchFunction
}
}

export default connect(propState,dispatchitem)(ItamComponaint);
