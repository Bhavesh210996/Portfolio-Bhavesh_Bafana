import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useAccentClass = () => {
  const {accent} = useSelector((s) => s.theme);
  return useMemo(() => {
    return `accent--${accent}`;
  }, [accent]);
};