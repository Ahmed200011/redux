import { BUY_CAKE } from "./ActionTypes";
const intitState={
    numberOfCakes:10,
};

const cakeReducer=(state=intitState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                numberOfCakes:state.numberOfCakes-action.payload,
            }
            default:
                return state
    }

}
export default cakeReducer