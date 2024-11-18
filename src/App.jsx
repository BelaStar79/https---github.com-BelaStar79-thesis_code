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
import DetailsPlanning from "./pages/planningPages/planning/DetailsPlanning.jsx";
import EditPlanning from "./pages/planningPages/planning/EditPlanning.jsx";
import ManualPlanning from "./pages/planningPages/planning/ManualPlanning.jsx";
import AddGuardArea from "./pages/planningPages/guardArea/AddGuardArea.jsx";
import DetailsGuardArea from "./pages/planningPages/guardArea/DetailsGuardArea.jsx";
import EditGuardArea from "./pages/planningPages/guardArea/EditGuardArea.jsx";
import ShiftsAndSchedules from "./pages/planningPages/guardArea/ShiftsAndSchedules.jsx";
import AddPosts from "./pages/planningPages/posts/AddPosts.jsx";
import DetailsPosts from "./pages/planningPages/posts/DetailsPosts.jsx";
import EditPosts from "./pages/planningPages/posts/EditPosts.jsx";
import AddGuardGroup from "./pages/planningPages/guardGroups/AddGuardGroup.jsx";
import DetailsGuardGroup from "./pages/planningPages/guardGroups/DetailsGuardGroups.jsx";
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
      <Route path="/planning/planning/details/" element={<DetailsPlanning />} />
      <Route path="/planning/planning/edit/" element={<EditPlanning />} />
      <Route
        path="/planning/planning/auto-planning/"
        element={<ManualPlanning />}
      />

      {/* Routes for planning/guard-area/ */}
      <Route path="/planning/guard-area/add/" element={<AddGuardArea />} />
      <Route
        path="/planning/guard-area/details/"
        element={<DetailsGuardArea />}
      />
      <Route path="/planning/guard-area/edit/" element={<EditGuardArea />} />
      <Route
        path="/planning/guard-area/shifts-schedules/"
        element={<ShiftsAndSchedules />}
      />

      {/* Routes for planning/guard-groups/ */}
      <Route path="/planning/guard-groups/add/" element={<AddGuardGroup />} />
      <Route
        path="/planning/guard-groups/details/"
        element={<DetailsGuardGroup />}
      />

      {/* Routes for planning/posts/ */}
      <Route path="/planning/posts/add/" element={<AddPosts />} />
      <Route path="/planning/posts/details/" element={<DetailsPosts />} />
      <Route path="/planning/posts/edit/" element={<EditPosts />} />

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
