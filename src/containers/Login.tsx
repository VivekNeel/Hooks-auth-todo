import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

/** Presentation */
import ErrorMessage from "../components/ErrorMessage";
/** Custom Hooks */
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";
/** Utils */
import { apiRequest, validateLoginForm } from "../utils/Helper";
import { Header } from "../components/Styles";

/** Context */
import { authContext } from "../contexts/AuthContext";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { error, showError } = useErrorHandler(null);
  const { setAuthStatus } = React.useContext(authContext);
  const authHandler = async () => {
    try {
      setLoading(true);
      const userData = await apiRequest(
        "https://jsonplaceholder.typicode.com/users",
        "post",
        { email: userEmail, password: userPassword }
      );
      const { id, email } = userData;
      setAuthStatus({ id, email });
    } catch (error) {
      setLoading(false);
      showError(error.message);
    }
  };
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (validateLoginForm(userEmail, userPassword, showError)) {
          authHandler();
        }
        // Auth handler
      }}
    >
      <Header>Sign in</Header>
      <br />
      <FormGroup>
        <Input
          type="email"
          name="email"
          value={userEmail}
          placeholder="Enter your email..."
          onChange={e => setUserEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          value={userPassword}
          placeholder="Password"
          onChange={e => setUserPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" disabled={loading} block={true}>
        {loading ? "Loading..." : "Sign In"}
      </Button>
      {error ? <ErrorMessage errorMessage={error}></ErrorMessage> : null}
    </Form>
  );
};

export default Login;
