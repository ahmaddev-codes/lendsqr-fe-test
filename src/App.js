import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../src/components/Dashboard/index'
import Users from "./components/Users/index";
import UserDetailsPage from "../src/components/UserDetailsPage/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />

        <Routes>
        <Route
            path="/users"
            exact
            element={<Users />}
          ></Route>
          <Route
            path="/user-details-page"
            element={<UserDetailsPage />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
