import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Appointments from "./Appointments";
import NewAppointment from "./NewAppointment";
import Register from "./Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/newAppointment" element={<NewAppointment />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
