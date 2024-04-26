import React from "react";
import { useAppSelector } from "./useReduxHooks";

export const useCalculateTest = () => {
  const cartState = useAppSelector((state) => state.cart.testState);

  const sum: number = cartState.reduce(
    (total: number, value: number) => total + value,
    0
  );

  console.log("calc", sum);

  React.useEffect(() => {
    console.log("effect");
  }, []);

  return sum;
};
