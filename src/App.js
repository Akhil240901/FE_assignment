// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import Dashboard from "./features/Dashboard";
import SearchWidget from "./components/SearchWidget";
import Home from "./features/Home";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/dashboard";

  return (
    <div>
      <nav
        style={{
          background: "#333",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#52c41a" : "#fff",
              marginRight: "1rem",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              color: isActive ? "#52c41a" : "#fff",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Dashboard
          </NavLink>
        </div>

        {/* Search only on dashboard */}
        {isDashboardRoute && <SearchWidget />}
      </nav>

      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
