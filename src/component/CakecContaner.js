import React from 'react'
import {buyCake} from '../redux/cake/CakeAction'
import {connect} from 'react-redux'
const CakcContaner = (props) => {
  return (
    <div>
      <h1>number of cakc${props.numberOfCakes}</h1>
      <button onClick={props.buy}>buy one </button>
    </div>
  )
}
const mapstateToprops=(state)=>{
  return {
    numberOfCakes:state.cake.numberOfCakes
  }
}
const mapDispatchPrpos=(dispatch)=>{
  return{
    buy:()=>dispatch(buyCake())
  }
}
export default connect(mapstateToprops,mapDispatchPrpos)(CakcContaner)
