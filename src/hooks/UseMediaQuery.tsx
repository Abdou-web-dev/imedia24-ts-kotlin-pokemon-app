import { useEffect, useState } from "react";

//this custom hook function takes 3 parameters
export const useStyleMediaQuery = (
  mixOrMax: string,
  widthOrHeight: string,
  value: number
) => {
  if (!mixOrMax) {
    mixOrMax = "min";
  }
  if (!widthOrHeight) {
    widthOrHeight = "width";
  }

  const [matches, setMatches] = useState<boolean>(
    window.matchMedia(`(${mixOrMax}-${widthOrHeight}: ${value}px)`).matches
  );

  useEffect(() => {
    window
      .matchMedia(`(${mixOrMax}-${widthOrHeight}: ${value}px)`)
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [mixOrMax, widthOrHeight, value]);

  return { matches };
};
