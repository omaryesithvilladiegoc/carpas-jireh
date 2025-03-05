import options from "../types";

export interface INavBarOptions {
  content: options;
  isOpen: boolean;
}

export interface INavBarProps {
  children: React.ReactNode;
  content: options;
}
