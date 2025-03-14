import { Tent } from "../types";

export interface Props {
  children: React.ReactNode;
  tents: Tent[];
}

export interface IFilterableTents {
  filterWord: string;
  setFilterWord: React.Dispatch<React.SetStateAction<string>>;
  tents: Tent[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}
