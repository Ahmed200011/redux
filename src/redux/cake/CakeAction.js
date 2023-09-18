///action creator

import { BUY_CAKE } from "./ActionTypes"

export const buyCake=(number=1)=>{
    return {
        type:BUY_CAKE,
        payload:number
    }
}