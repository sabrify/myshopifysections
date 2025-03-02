import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
// used for the switch dark mode button 
export function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}
