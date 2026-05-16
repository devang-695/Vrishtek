import { 
  Bricolage_Grotesque, 
  Inter, 
  JetBrains_Mono 
} from "next/font/google";

export const fontDisplay = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});