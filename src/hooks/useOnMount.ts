import { useEffect, useRef } from "react";

export const useOnMount = (callback: () => void) => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      callback();
      isMountedRef.current = true;
    }
  }, []);
};
