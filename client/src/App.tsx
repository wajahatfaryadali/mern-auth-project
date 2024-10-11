import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
