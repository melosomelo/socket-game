import React, { useState, useEffect, useRef } from "react";

type callbackFn = (...args: any[]) => void;

function useInterval(callback: callbackFn, delay: number) {
  const savedCallback = useRef<callbackFn>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      (savedCallback.current as callbackFn)();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
