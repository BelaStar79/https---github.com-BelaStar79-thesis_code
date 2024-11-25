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
import EditGuardGroup from "./pages/planningPages/guardGroups/EditGuardGroup.jsx";
import AssociatePeopleToGuardGroup from "./pages/planningPages/guardGroups/AssociatePeopleToGuardGroup.jsx";
import DetailsPotential from "./pages/planningPages/potential/DetailsPotential.jsx";
import AssociateVariableToPeople from "./pages/planningPages/potential/AssociateVariableToPeople.jsx";
import AssociatePatronToPeople from "./pages/planningPages/potential/AssociatePatronToPeople.jsx";
// Control
import AssistanceControl from "./pages/controlPages/assistance/Assistance.jsx";
import Incident from "./pages/controlPages/incident/Incident.jsx";
import DutyOfficer from "./pages/controlPages/dutyOfficer/DutyOfficer.jsx";
import AddAssistance from "./pages/controlPages/assistance/AddAssistance.jsx";
import EditAssistance from "./pages/controlPages/assistance/EditAssistance.jsx";
import AddIncident from "./pages/controlPages/incident/AddIncident.jsx";
import AddDutyOfficer from "./pages/controlPages/dutyOfficer/AddDutyOfficer.jsx";
import EditDutyOfficer from "./pages/controlPages/dutyOfficer/EditDutyOficer.jsx";
// Report
import Guard from "./pages/reportPages/guard/Guard.jsx";
import IncidentReport from "./pages/reportPages/incident/IncidentReport.jsx";
import PotentialReport from "./pages/reportPages/potential/PotentialReport.jsx";
import AssistanceReport from "./pages/reportPages/assistance/AssistanceReport.jsx";
import QuantitativePotential from "./pages/reportPages/quantitativePotential/QuantitativePotential.jsx";
import Frequency from "./pages/reportPages/frequency/Frequency.jsx";
// Configuration
import TypeIncidents from "./pages/configurationPages/typeIncidents/TypeIncidents.jsx";
import AddTypeIncidents from "./pages/configurationPages/typeIncidents/AddTypeIncidents.jsx";
import EditTypeIncidents from "./pages/configurationPages/typeIncidents/EditTypeIncidents.jsx";
import ConfigurationVariables from "./pages/configurationPages/configurationVariables/ConfigurationVariables.jsx";
import AddConfigurationVariables from "./pages/configurationPages/configurationVariables/AddConfigurationVariables.jsx";
import EditConfigurationVariables from "./pages/configurationPages/configurationVariables/EditConfigurationVariables.jsx";
import Schedules from "./pages/configurationPages/schedule/Schedule.jsx";
import AddSchedule from "./pages/configurationPages/schedule/AddSchedule.jsx";
import EditSchedule from "./pages/configurationPages/schedule/EditSchedules.jsx";
// Security
import Users from "./pages/securityPages/users/Users.jsx";
import AddUsers from "./pages/securityPages/users/AddUsers.jsx";
import DetailsUsers from "./pages/securityPages/users/DetailsUsers.jsx";
import EditUsers from "./pages/securityPages/users/EditUsers.jsx";

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
      <Route path="/planning/planning/add/" element={<AddPlanning />} />
      <Route path="/planning/planning/details/" element={<DetailsPlanning />} />
      <Route path="/planning/planning/edit/" element={<EditPlanning />} />
      <Route
        path="/planning/planning/auto-planning/"
        element={<ManualPlanning />}
      />
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
      <Route path="/planning/posts/add/" element={<AddPosts />} />
      <Route path="/planning/posts/details/" element={<DetailsPosts />} />
      <Route path="/planning/posts/edit/" element={<EditPosts />} />
      <Route path="/planning/guard-groups/add/" element={<AddGuardGroup />} />
      <Route
        path="/planning/guard-groups/details/"
        element={<DetailsGuardGroup />}
      />
      <Route path="/planning/guard-groups/edit/" element={<EditGuardGroup />} />
      <Route
        path="/planning/guard-groups/associate/"
        element={<AssociatePeopleToGuardGroup />}
      />
      <Route
        path="/planning/potential/details/"
        element={<DetailsPotential />}
      />
      <Route
        path="/planning/guard-groups/associate-variables/"
        element={<AssociateVariableToPeople />}
      />
      <Route
        path="/planning/guard-groups/associate-patron/"
        element={<AssociatePatronToPeople />}
      />

      {/* Routes for control */}
      <Route path="/control/assistance" element={<AssistanceControl />} />
      <Route path="/control/incident" element={<Incident />} />
      <Route path="/control/assistance/add/" element={<AddAssistance />} />
      <Route path="/control/duty-officer" element={<DutyOfficer />} />
      <Route path="/control/assistance/edit/" element={<EditAssistance />} />
      <Route path="/control/incident/add/" element={<AddIncident />} />
      <Route path="/control/duty-officer/add/" element={<AddDutyOfficer />} />
      <Route path="/control/duty-officer/edit/" element={<EditDutyOfficer />} />

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

      {/* Routes for configuration */}
      <Route path="/configuration/type-incidents" element={<TypeIncidents />} />
      <Route
        path="/configuration/type-incidents/add/"
        element={<AddTypeIncidents />}
      />
      <Route
        path="/configuration/type-incidents/edit/"
        element={<EditTypeIncidents />}
      />
      <Route
        path="/configuration/configuration-variables"
        element={<ConfigurationVariables />}
      />
      <Route
        path="/configuration/configuration-variables/add/"
        element={<AddConfigurationVariables />}
      />
      <Route
        path="/configuration/configuration-variables/edit/"
        element={<EditConfigurationVariables />}
      />
      <Route path="/configuration/schedules" element={<Schedules />} />
      <Route path="/configuration/schedules/add/" element={<AddSchedule />} />
      <Route path="/configuration/schedules/edit/" element={<EditSchedule />} />

      {/* Routes for security */}
      <Route path="/configuration/users" element={<Users />} />
      <Route path="/configuration/users/add/" element={<AddUsers />} />
      <Route path="/configuration/users/details/" element={<DetailsUsers />} />
      <Route path="/configuration/users/edit/" element={<EditUsers />} />
    </Routes>
  );
}

export default App;
