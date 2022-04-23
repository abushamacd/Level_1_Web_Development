import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/AddUser/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="user/add" element={<AddUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
