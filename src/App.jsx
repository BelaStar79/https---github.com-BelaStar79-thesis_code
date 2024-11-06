import Login from "./auth/Login.jsx";
import Planning from "./pages/planning/Planning.jsx";
import GuardArea from "./pages/guardArea/GuardArea.jsx";
import Posts from "./pages/posts/Posts.jsx";
import GuardGroups from "./pages/guardGroups/GuardGroups.jsx";
import Potential from "./pages/potential/Potential.jsx";
import Assistance from "./pages/assistance/Assistance.jsx";
import Incident from "./pages/incident/Incident.jsx";
import DutyOfficer from "./pages/dutyOfficer/DutyOfficer.jsx";
import "./css/app.css";
import "./css/variable.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* Routes for login */}
      <Route path="/" element={<Login />} />

      {/* Routes for planning */}
      <Route path="/planning" element={<Planning />} />
      <Route path="/guard-area" element={<GuardArea />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/guard-groups" element={<GuardGroups />} />
      <Route path="/potential" element={<Potential />} />

      {/* Routes for control */}
      <Route path="/assistance" element={<Assistance />} />
      <Route path="/incident" element={<Incident />} />
      <Route path="/duty-officer" element={<DutyOfficer />} />

      {/* Routes for report */}
      <Route path="/incident" element={<Incident />} />
      <Route path="/potential" element={<Potential />} />
      <Route path="/assistance" element={<Assistance />} />
    </Routes>
  );
}

export default App;
