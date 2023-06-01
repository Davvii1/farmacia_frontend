import { useContext, useState, useEffect } from "react";
import Logo from "./assets/logo.png";
import axios from "axios";
import { userContext } from "./context/userContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    user != null ? navigate("/appointments") : null;
  }, []);

  const submitLogin = async (e) => {
    e.preventDefault();
    const r = await axios.post("https://farmacia-backend.vercel.app/login", {
      email: email,
      password: password,
    });
    setUser(r.data.usuario);
    navigate("/appointments");
  };

  return (
    <>
      <div className="centerContainer">
        <img src={Logo} alt="Logo" />
        <form className="authContainer" onSubmit={submitLogin}>
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
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </>
  );
}

export default Login;
