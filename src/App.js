import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Info from "./component/Info";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Info" element={<Info />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<Info />} />
          {/* <Route path="/" exact Component={<Login />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
