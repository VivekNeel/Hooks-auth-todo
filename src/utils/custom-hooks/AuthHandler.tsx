import * as React from "react";
/** Custom types */
import { UserAuth } from "../../custom-types";
/** Utils */
import { DEFAULT_USER_AUTH } from "../Consts";

const useAuthHandler = (initialState: UserAuth) => {
  const [auth, setAuth] = React.useState(initialState);

  const setAuthStatus = (userAuth: UserAuth) => {
    window.localStorage.setItem("UserAuth", JSON.stringify(userAuth));
    setAuth(userAuth);
  };

  const setUnAuthStatus = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };

  return {
    auth,
    setAuthStatus,
    setUnAuthStatus
  };
};

export default useAuthHandler;
