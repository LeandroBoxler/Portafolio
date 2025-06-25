import { useState, useRef } from "react";

export const useZIndex = () => {
  const [zMap, setZMap] = useState<Record<string, number>>({});
  const zCount = useRef(100);

  const bringToFront = (id: string) => {
    zCount.current += 1;
    setZMap((prev) => ({ ...prev, [id]: zCount.current }));
  };

  const getZIndex = (id: string) => zMap[id] ?? 0;
  return { bringToFront, getZIndex };
};
