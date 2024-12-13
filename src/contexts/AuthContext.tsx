import { createContext, PropsWithChildren, useContext } from "react";
type AuthContextType = {
  user: boolean | null;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const user: boolean = true;
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

// hook to provide authcontext to any component
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) throw new Error("auth context not found");

  return context;
};
