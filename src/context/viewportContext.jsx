import { createContext, useState, useEffect, useContext } from "react";
// Useful Resource: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/

const viewportContext = createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // Registering resize event listener on mounting
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const context = useContext(viewportContext);
  if (!context) {
    throw new Error(`useViewport must be used inside a ViewportProvider`);
  }
  return context;
};

export { ViewportProvider, useViewport };
