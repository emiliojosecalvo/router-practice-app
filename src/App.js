import * as React from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import './App.css'

export default function App() {
  return (
    <div >
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile name='Emilio' mobile='088 123 1234' isMerry={false} />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="App">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="App-navbar">
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? "App-active-link" : ""} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? "App-active-link" : ""} to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? "App-active-link" : ""} to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? "App-active-link" : ""} to="/nothing-here">Nothing Here</NavLink>
          </li>
        </ul>
      </nav>

      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <NavLink to="/">Go to the home page</NavLink>
      </p>
    </div>
  );
}
