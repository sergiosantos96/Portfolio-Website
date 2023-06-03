import Navbar from "./components/Navbar/Navbar";
import { PageRouter } from "./routes/Routes";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <PageRouter />
    </>
  );
}

export default App;
