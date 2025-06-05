import React from "react";

export const lazyWithMinDelay = (factory, delay) => {
  return React.lazy(() =>
    Promise.all([
      factory(),
      new Promise((resolve) => setTimeout(resolve, delay)),
    ]).then(([moduleExports]) => moduleExports)
  );
};
