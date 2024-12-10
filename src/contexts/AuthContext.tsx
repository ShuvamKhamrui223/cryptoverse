import { createContext, PropsWithChildren, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const user: boolean = true;
  return <AuthContext.Provider value={{user}}>
    {children}
  </AuthContext.Provider>
};

// hook to provide authcontext to any component
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) throw new Error("auth context not found");

  return context;
};
