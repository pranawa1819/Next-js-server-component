import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const startsWith = (
  startingChar: string | number,
  dataToCheck?: string | number,
) => {
  if (!dataToCheck) {
    return false;
  }

  return dataToCheck.toString().charAt(0) === startingChar.toString();
};

export const getTimeZone = (): string => {
  const offset = new Date().getTimezoneOffset(),
    o = Math.abs(offset);
  return (
    (offset < 0 ? "+" : "-") +
    ("00" + Math.floor(o / 60)).slice(-2) +
    ":" +
    ("00" + (o % 60)).slice(-2)
  );
};
