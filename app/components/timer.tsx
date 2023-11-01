"use client";

import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  let count = 0;

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };
  return (
    <div className="h-screen flex flex-row items-center justify-center gap-6 ">
      <div className="h-screen flex flex-col items-center justify-center gap-6 ">
        <h1 className="text-5xl">Work</h1>
        <div className="flex flex-row ">
          <p className="text-3xl">{hours}</p>
          <p className="text-3xl">:{minutes.toString().padStart(2, "0")}:</p>
          <p className="text-3xl">{seconds.toString().padStart(2, "0")}</p>
        </div>

        <div className="flex flex-row gap-4">
          <button
            className="border-emerald-500 rounded shadow-sm shadow-emerald-500 bg-emerald-500 text-xl px-4 py-2"
            onClick={startAndStop}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
          <button
            className="border-red-600 rounded shadow-sm shadow-red-600 bg-red-600 text-xl px-4 py-2"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
