import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("accesToken");
  const [auth, setAuth] = useState(token ? { accesToken: token } : {});
  const setAuthFunction = (accesToken, checked) => {
    setAuth({ accesToken });
    if (checked) {
      localStorage.setItem("accesToken", accesToken);
    }
  };
  console.log(children);
  return (
    <AuthContext.Provider value={{ auth, setAuthFunction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
