import { Lato } from "next/font/google";
import { Roboto } from "next/font/google";

export const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400",
});

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "800",
});
