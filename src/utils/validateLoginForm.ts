import * as validator from "validator";

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
