import { Routes, Route } from "react-router-dom";

import ProfilePage from "./components/ProfilePage";
import JobTrackingPage from "./pages/JobTrackingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/tracking" element={<JobTrackingPage />} />
    </Routes>
  );
}

export default App;
