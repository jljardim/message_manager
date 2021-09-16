import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [gatilho, setGatilho] = useState("");
  const [canal, setCanal] = useState("");
  const [timer, setTimer] = useState("");

  console.log(gatilho, canal, timer);

  return (
    <>
      <div className="container_actions">
        <h2>Messages</h2>
        <div className="div_actions_button">
          <Link to="/message">
            <button>Voltar</button>
          </Link>
          <button>Cadastrar</button>
        </div>
      </div>
      <div>
        <label>Gatilho:</label>

        <select
          value={gatilho}
          onChange={(event) => setGatilho(event.target.value)}
        >
          <option></option>
          <option>Corinthians</option>
          <option>Palmeiras</option>
        </select>

        <label>Canal:</label>

        <select
          value={canal}
          onChange={(event) => setCanal(event.target.value)}
        >
          <option></option>
          <option>Corinthians</option>
          <option>Palmeiras</option>
        </select>

        <label>Timer:</label>

        <select
          value={timer}
          onChange={(event) => setTimer(event.target.value)}
        >
          <option></option>
          <option>15:10</option>
          <option>14:00</option>
        </select>
      </div>
      <textarea value={(gatilho, canal, timer)}></textarea>
    </>
  );
};

export default Register;
