import { useContext, useEffect, useState } from "react";
import Logo from "./assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "./context/userContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    user != null ? navigate("/appointments") : null;
  }, []);

  const submitRegister = async (e) => {
    e.preventDefault();
    const r = await axios.post("http://localhost:4000/register", {
      email: email,
      password: password,
      name: name,
      phone: phone,
    });
    navigate("/login");
  };

  return (
    <>
      <div className="centerContainer">
        <img src={Logo} alt="Logo" />
        <form className="authContainer" onSubmit={submitRegister}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Registrarme</button>
        </form>
      </div>
    </>
  );
}

export default Register;
