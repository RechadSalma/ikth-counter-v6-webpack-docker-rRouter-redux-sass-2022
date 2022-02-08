import React from "react";
import { useSelector } from "react-redux";

export default function CounterDisplay() {
  const counterNumber = useSelector((state) => state.counterReducer);

  return <div id="CounterDisplay">{counterNumber}</div>;
}
