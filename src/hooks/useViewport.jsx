import { useEffect, useState } from "react";

const useViewport = () => {
  // Width State
  const [width, setWidth] = useState(window.innerWidth);

  // Registering resize event listener on mounting
  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return { width };
};

export useViewport;
