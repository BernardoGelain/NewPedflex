import { ThemeContextProvider } from "./contexts/themeContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
}

export default App;
