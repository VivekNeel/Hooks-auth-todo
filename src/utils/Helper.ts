import * as validator from "validator";
/** Custom types */
import { UserAuth } from "../custom-types";
/** Utils */
import { DEFAULT_USER_AUTH } from "./Consts";

export const apiRequest = async (
  url: string,
  method: string,
  bodyParams?: { email: string; password: string }
): Promise<any> => {
  const response = await fetch(url, {
    method,
    body: bodyParams ? JSON.stringify(bodyParams) : undefined,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  return await response.json();
};

export const validateLoginForm = (
  email: string,
  password: string,
  setError: (error: string | null) => void
): boolean => {
  if (!email || !password) {
    setError("Email and password cannot be empty");
    return false;
  }
  if (!validator.isEmail(email)) {
    setError("Please enter a valid email");
    return false;
  }
  return true;
};

export const getStoredUserAuth = (): UserAuth => {
  const auth = window.localStorage.getItem("UserAuth");
  if (auth) {
    return JSON.parse(auth);
  }
  return DEFAULT_USER_AUTH;
};
