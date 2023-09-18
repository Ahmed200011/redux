import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReduser'
import iceReduser from './iceCream/iceReducer'
import teeReducer from './tee/teeReducer'
import reduser from '../users/userreduser'

export const rootReducers=combineReducers({
    cake:cakeReducer,
    ice:iceReduser,
    tee:teeReducer,
    user:reduser
})
