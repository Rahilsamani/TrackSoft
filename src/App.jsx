import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Track from "./components/core/Track";
import Screenshot from "./pages/Screenshot";
import UnderDevelopment from "./components/common/UnderDevelopment";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route element={<Dashboard />}>
          <Route path="dashboard/track" element={<Track />} />
          <Route path="dashboard/screenshot" element={<Screenshot />} />
          <Route path="dashboard/holiday" element={<UnderDevelopment />} />
          <Route path="dashboard/leave" element={<UnderDevelopment />} />
          <Route path="dashboard/payroll" element={<UnderDevelopment />} />
          <Route path="dashboard/members" element={<UnderDevelopment />} />
          <Route path="dashboard/upload" element={<UnderDevelopment />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
