import { useContext, createContext, useState } from "react";

const AuthContext = createContext(undefined);

const AuthProvider = ({ children })  => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

const login = () => {
  // TODO add authentication logic here;
  setIsAuthenticated(true);
};
  const logout = () => setIsAuthenticated(false);

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);