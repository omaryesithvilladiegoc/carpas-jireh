"use client";
import { createContext, useContext } from "react";
import { IFilterableTents } from "../interfaces";

export const FilterableTentsContext = createContext<
  IFilterableTents | undefined
>(undefined);

export function useContextFilterableTents() {
  const context = useContext(FilterableTentsContext);
  if (!context) throw new Error("Context required");
  return context;
}
