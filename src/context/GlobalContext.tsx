import * as React from "react";

interface IGlobalContextProps {
  user: any;
  setUser: (user: any) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  user: {},
  setUser: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = React.useState({});
  

  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);



