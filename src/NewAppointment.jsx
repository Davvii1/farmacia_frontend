import { useContext, useEffect, useState } from "react";
import Logo from "./assets/logo.png";
import axios from "axios";
import { userContext } from "./context/userContext";
import { useNavigate } from "react-router-dom";

function NewAppointment() {
  const [datetime, setDatetime] = useState("");
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    user == null ? navigate("/") : null;
  }, []);

  const submitLogin = async (e) => {
    e.preventDefault();
    const r = await axios.post("http://localhost:4000/newAppointment", {
      datetime: datetime,
      email: user.email,
    });
    navigate("/appointments");
  };

  return (
    <>
      <div className="centerContainer">
        <img src={Logo} alt="Logo" />
        <form className="authContainer" onSubmit={submitLogin}>
          <label htmlFor="email">Fecha de consulta</label>
          <input
            type="datetime-local"
            name="datetime"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
          <button type="submit">Agendar</button>
        </form>
      </div>
    </>
  );
}

export default NewAppointment;
