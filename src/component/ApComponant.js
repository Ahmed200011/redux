import { React, useEffect } from "react";
import { connect } from "react-redux";
import { fechUser } from "../users/userAction";

//loading: false,
// data: [],
// error: "",
const ApComponant = ({ userData, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);
  return userData.loading ? (
    <h1>Loading..........</h1>
  ) : userData.error ? (
    <h1>{userData.error + "errrrrrror"}</h1>
  ) : (
    <div>
      <h2>user list</h2>
      <div >
        {userData&&
          userData.data &&
          userData.data.map((user ) => <p key={user.id}>{user.name}</p>)
        }
        
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fechUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApComponant);
