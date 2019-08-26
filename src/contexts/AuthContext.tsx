import * as React from "react";
/** Custom types */
import { UserAuth } from "../custom-types";
/** Custom Hooks */
import useAuthHandler from "../utils/custom-hooks/AuthHandler";
/** Utils */
import { DEFAULT_USER_AUTH } from "../utils/Consts";
import { getStoredUserAuth } from "../utils/Helper";

interface IAuthContextInterfact {
  setAuthStatus: (userAuth: UserAuth) => void;
  setUnAuthStatus: () => void;
  auth: UserAuth;
}

export const authContext = React.createContext<IAuthContextInterfact>({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => {},
  setUnAuthStatus: () => {}
});

const { Provider } = authContext;

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { setAuthStatus, setUnAuthStatus, auth } = useAuthHandler(
    getStoredUserAuth()
  );
  return (
    <Provider value={{ auth, setAuthStatus, setUnAuthStatus }}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
