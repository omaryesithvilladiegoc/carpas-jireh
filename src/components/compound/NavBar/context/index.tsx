import { createContext, useContext } from "react";
import { INavBarOptions } from "../interfaces";

export const NavBarContext = createContext<INavBarOptions | undefined>(
  undefined
);

export const useNavBarContext = () => {
  const context = useContext(NavBarContext);
  if (context === undefined) {
    throw new Error("useNavBarContext must be used within a NavBarProvider");
  }
  return context;
};
