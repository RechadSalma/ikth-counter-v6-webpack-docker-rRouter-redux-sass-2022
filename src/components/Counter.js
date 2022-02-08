import React from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
import "../styles/Counter.scss";

export default function counter() {
  return (
    <div id="Counter">
      <CounterDisplay />
      <CounterButtons />
    </div>
  );
}
