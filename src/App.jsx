import "./css/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Login
import Login from "./auth/Login.jsx";
// Planning
import Planning from "./pages/planningPages/planning/Planning.jsx";
import GuardArea from "./pages/planningPages/guardArea/GuardArea.jsx";
import Posts from "./pages/planningPages/posts/Posts.jsx";
import GuardGroups from "./pages/planningPages/guardGroups/GuardGroups.jsx";
import Potential from "./pages/planningPages/potential/Potential.jsx";
import AddPlanning from "./pages/planningPages/planning/AddPlanning.jsx";
// Control
import Assistance from "./pages/controlPages/assistance/Assistance.jsx";
import Incident from "./pages/controlPages/incident/Incident.jsx";
import DutyOfficer from "./pages/controlPages/dutyOfficer/DutyOfficer.jsx";
// Report
import Guard from "./pages/reportPages/guard/Guard.jsx";
import IncidentReport from "./pages/reportPages/incident/IncidentReport.jsx";
import PotentialReport from "./pages/reportPages/potential/PotentialReport.jsx";
import AssistanceReport from "./pages/reportPages/assistance/AssistanceReport.jsx";
import QuantitativePotential from "./pages/reportPages/quantitativePotential/QuantitativePotential.jsx";
import Frequency from "./pages/reportPages/frequency/Frequency.jsx";

function App() {
  return (
    <Routes>
      {/* Routes for login */}
      <Route path="/" element={<Login />} />

      {/* Routes for planning */}
      <Route path="/planning/planning" element={<Planning />} />
      <Route path="/planning/guard-area" element={<GuardArea />} />
      <Route path="/planning/posts" element={<Posts />} />
      <Route path="/planning/guard-groups" element={<GuardGroups />} />
      <Route path="/planning/potential" element={<Potential />} />

      {/* Routes for planning/planning/ */}
      <Route path="/planning/planning/add/" element={<AddPlanning />} />

      {/* Routes for control */}
      <Route path="/control/assistance" element={<Assistance />} />
      <Route path="/control/incident" element={<Incident />} />
      <Route path="/control/duty-officer" element={<DutyOfficer />} />

      {/* Routes for report */}
      <Route path="/report/guard" element={<Guard />} />
      <Route path="/report/incident" element={<IncidentReport />} />
      <Route path="/report/potential" element={<PotentialReport />} />
      <Route
        path="/report/quantitative-potential"
        element={<QuantitativePotential />}
      />
      <Route path="/report/frequency" element={<Frequency />} />
      <Route path="/report/assistance" element={<AssistanceReport />} />
    </Routes>
  );
}

export default App;
