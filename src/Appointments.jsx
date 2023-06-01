import { useContext, useEffect, useState } from "react";
import { userContext } from "./context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Appointment from "./assets/Appointment.svg";
import Add from "./assets/Add.svg";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    user == null ? navigate("/") : null;
    async function getAppointments() {
      const r = await axios.get("http://localhost:4000/appointments");
      setAppointments(r.data.appointments);
    }
    getAppointments();
  }, []);

  return (
    <>
      <div className="fullWContainer">
        <h1>Citas</h1>
        {appointments.map((appointment) => {
          return (
            <div key={appointment.datetime} className="appointmentContainer">
              <img src={Appointment} alt="Icon" />
              <div>
                <p>
                  Fecha de consulta:{" "}
                  {new Date(appointment.datetime).toLocaleString()}
                </p>
                <p>Nombre del paciente: {appointment.name}</p>
                <p>Email del paciente: {appointment.email}</p>
                <p>Teléfono del paciente: {appointment.phone}</p>
              </div>
            </div>
          );
        })}
      </div>
      {user != null && user.user_type == 0 ? (
        <img
          id="add"
          src={Add}
          alt="IconAdd"
          onClick={() => navigate("/newAppointment")}
        />
      ) : null}
    </>
  );
}

export default Appointments;
