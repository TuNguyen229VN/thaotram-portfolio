import React, { useState, useEffect } from "react";
import LoadingComponent from "../loading/LoadingComponent";

const DelayedFallback = ({ delay = 1300 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return show ? <LoadingComponent /> : null;
};

export default DelayedFallback;