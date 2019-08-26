import * as React from "react";
import RootContainer from "./containers/RootContainer";
/** Context API */
import AuthContextProvider from "./contexts/AuthContext";
import TODOProvider from "./contexts/ToDoContext";
function App() {
  return (
    <AuthContextProvider>
      <TODOProvider>
        <RootContainer />
      </TODOProvider>
    </AuthContextProvider>
  );
}
export default App;
