import Navbar from "./components/Navbar/Navbar";
import { PageRouter } from "./routes/Routes";
import { createContext, useState } from "react";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";

export const ThemeContext = createContext({
  theme: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Navbar />
          <PageRouter />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
