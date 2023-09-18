import { BUY_ICECREAM} from "./actionType"

const initIceState={
    numperOfIce:77
}
const iceReduser=(state=initIceState,action)=>{
    switch (action.type){
        case BUY_ICECREAM:
            return {
                numperOfIce:state.numperOfIce-1
            }
            default :
            return state
    }
}

export default iceReduser