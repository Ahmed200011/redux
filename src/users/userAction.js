import axios from "axios";
import * as all from "./actionType";

export const fetchuserrequest = () => {
  return {
    type: all.FETCH_USER_REQUEST,
  };
};
export const fetchusersuccesss = (users) => {
  return {
    type: all.FETCH_USER_SUCCESS,
    payload:users
  };
};
export const fetchuserfaluer = (error) => {
  return {
    type: all.FETCH_USER_FALUER,
    payload:error
  };
};


export const fechUser = () => {
    return function (dispatch) {
      dispatch(fetchuserrequest());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const user = response.data;
  
          dispatch(fetchusersuccesss(user));
        })
        .catch((error) => {
          dispatch(fetchuserfaluer(error.message));
        });
    };
  };
  