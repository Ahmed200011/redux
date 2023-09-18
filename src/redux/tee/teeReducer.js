import { BUY_TEE } from "./actionType"

const intitTeeState={
    numperOfTee:100
}
const teeReducer=(state=intitTeeState,action)=>{
switch(action.type){
    case BUY_TEE:
        return{
            numperOfTee:state.numperOfTee-1
        }
        default:
            return state
}
}
export default teeReducer