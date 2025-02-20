import React from "react";
import "./CountDownTimer.css";
import { useState } from "react";
const CountDownTimer = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);
  const timerstarted = () => {
    for (let i = 1; i <= 60; i++) {
      return setSec(i);
    }
  };
  return (
    <div align="center">
      <h1>Timer</h1>
      <div>
      <input className="hrs" placeholder="HH" height={50} width={50} type="number" />
      <input className="min" placeholder="MM" height={100} width={100} type="number" />
      <input className="sec" placeholder="SS" height={100} width={100} type="number" />
      </div>
      <button onClick={timerstarted}>Start</button>
    </div>
  );
};
export default CountDownTimer;
