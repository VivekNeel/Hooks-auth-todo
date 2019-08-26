import * as React from "react";
/** Presentation */
import { Wrapper } from "../components/Styles";
import Login from "./Login";
import ToDo from "../components/ToDo";

/** Context */
import { authContext } from "../contexts/AuthContext";

function RootContainer() {
  const { auth } = React.useContext(authContext);
  return (
    <Wrapper>
      {auth.id ? <ToDo /> : null}
      {!auth.id && <Login />}
    </Wrapper>
  );
}
export default RootContainer;
