// import { publicRequest } from "../Client/RequestMethod"
// import { deleteCartItemStart } from "./CartRedux"
// import { loginFailure, loginStart, loginSuccess } from "./UserRedux"

// export const login=async(dispatch,user)=>{
//     dispatch(loginStart())
//     try {
//         const res=await publicRequest.post("/auth/login",user)
//         dispatch(loginSuccess(res.data))
        
//     } catch (error) {
//         dispatch(loginFailure())
//         console.log("failll",loginFailure());
//     }
// }

import { loginFailure, loginStart, loginSuccess } from "./UserRedux";
import { publicRequest } from "./../Client/RequestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};