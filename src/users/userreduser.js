
import * as all from './actionType'

const initState = {
  loading: false,
  data: [],
  error: "",
};
const reduser = (state = initState, action) => {
  switch (action.type) {
    case all.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case all.FETCH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case all.FETCH_USER_FALUER:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};



export default reduser;
