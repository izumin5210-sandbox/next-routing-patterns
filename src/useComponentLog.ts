import { useEffect } from "react";

export const useComponentLog = (name: string) => {
  console.log(`${name} is rendered.`);
  useEffect(() => {
    console.log(`${name} is mounted.`);
    return () => {
      console.log(`${name} is unmounted.`);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
