import React, { createContext, useContext, useState } from 'react';

interface UserCredential {
  uid: string;
  token: string;
}

interface AuthContextType {
  userCredential: UserCredential | null;
  setUserCredential: React.Dispatch<React.SetStateAction<UserCredential | null>>;
}

const AuthContext = createContext<AuthContextType>({
  userCredential: null,
  setUserCredential: () => {}
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userCredential, setUserCredential] = useState<UserCredential | null>(null);

  return (
    <AuthContext.Provider value={{ userCredential, setUserCredential }}>
      {children}
    </AuthContext.Provider>
  );
};