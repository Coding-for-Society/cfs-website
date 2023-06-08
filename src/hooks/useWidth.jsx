import { useEffect, useState } from "react";

const useViewport = () => {
  // Width State
  const [width, setWidth] = useState(window.innerWidth);

  // Registering resize event listener on mounting
  useEffect(() => {}, []);

  return { width };
};
