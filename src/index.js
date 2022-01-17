import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Show from "./Show";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="Show" element={<Show />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);