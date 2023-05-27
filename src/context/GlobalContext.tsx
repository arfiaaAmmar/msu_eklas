import { useState, createContext, useContext } from "react";

export type UserType = {
  mode: "student" | "lecturer"
  username: string
  password: string
  email: string
}

interface IGlobalContextProps {
  user: UserType
  setUser: (user: UserType) => void;
  logged: boolean
  setLogged: (logged: boolean) => void
}

export const GlobalContext = createContext<IGlobalContextProps>({
  user: {
    mode: "student",
    username: "",
    password: "",
    email: ""
  },
  setUser: () => {},
  logged: false,
  setLogged: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType>({
    mode: "student",
    username: "",
    password: "",
    email: ""
  });
  const [logged, setLogged] = useState(true)

  return (
    <GlobalContext.Provider
      value={{
        user: user,
        setUser: setUser,
        logged: logged,
        setLogged: setLogged
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);



