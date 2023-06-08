import "./App.css";
import Routes from "./Routes";
import { ViewportProvider } from "./context/viewportContext";

function App() {
  return (
    <ViewportProvider>
      <Routes />
    </ViewportProvider>
  );
}

export default App;
