import { DM_Serif_Text, DM_Sans } from "next/font/google";

export const dmSerif = DM_Serif_Text({
  variable: "--DM-serif-text",
  weight: "400",
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  variable: "--dm-sans",
  weight: "800",
  subsets: ["latin"],
});

export const dmSansLight = DM_Sans({
  variable: "--dm-sans",
  weight: "200",
  subsets: ["latin"],
});
