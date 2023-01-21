import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index";
import Users from "./components/Users/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
