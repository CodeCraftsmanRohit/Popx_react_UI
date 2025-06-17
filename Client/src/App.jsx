import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Register from "./pages/Register";
import Userdata from "./pages/Userdata";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-data" element={<Userdata />} />
      </Routes>
    </div>
  );
};

export default App;