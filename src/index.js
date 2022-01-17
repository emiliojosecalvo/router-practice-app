import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Show from "./Show";
import List from "./List";

render(
  <App />,
  document.getElementById("root")
);