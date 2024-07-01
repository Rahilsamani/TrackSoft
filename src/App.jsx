import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Track from "./components/core/Track";
import Screenshot from "./pages/Screenshot";
import Holiday from "./pages/Holiday";
import Leave from "./pages/Leave";
import Payroll from "./pages/Payroll";
import Members from "./pages/Members";
import FileUploads from "./pages/FileUploads";

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
          <Route path="dashboard/holiday" element={<Holiday />} />
          <Route path="dashboard/leave" element={<Leave />} />
          <Route path="dashboard/payroll" element={<Payroll />} />
          <Route path="dashboard/members" element={<Members />} />
          <Route path="dashboard/upload" element={<FileUploads />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
