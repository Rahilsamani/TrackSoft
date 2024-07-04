import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Track from "./components/core/Track";
import Screenshot from "./pages/Screenshot";
import UnderDevelopment from "./components/common/UnderDevelopment";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OpenRoute from "./components/core/OpenRoute";
import PrivateRoute from "./components/core/PrivateRoute";

function App() {
  return (
    <div className="w-full overflow-hidden" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
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
    </div>
  );
}

export default App;
