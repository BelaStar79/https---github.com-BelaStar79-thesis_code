import Login from "./auth/Login.jsx";
import Planning from "./pages/planning/Planning.jsx";
import "./css/app.css";
import "./css/variable.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/planning" element={<Planning />} />
    </Routes>
  );
}

export default App;
