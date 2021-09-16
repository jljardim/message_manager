import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import Actions from '../../components/Actions';

  

const Message = () => {
    
  const [gatilho, setName] = useState("");
  const [canal, setCanal] = useState("");
  const [timer, setTimer] = useState("");
   
    console.log(gatilho, canal, timer);

    return (
      <>
      
        <div className="container_actions">
          <h2>Messages</h2>
          <div className="div_actions_button">
            <button>Pesquisar</button>
            <Link to="/register">
              <button>Nova mensagem</button>
            </Link>
          </div>
        </div>
        <div>
          <label>Gatilho:</label>
          <input
            value={gatilho}
            onChange={(event) => setName(event.target.value)}
          />
          <label>Canal:</label>
          <input
            value={canal}
            onChange={(event) => setCanal(event.target.value)}
          />
          <label>Timer:</label>
          <input
            value={timer}
            onChange={(event) => setTimer(event.target.value)}
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Gatilho</th>
              <th>Canal</th>
              <th>Timer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{gatilho}</td>
              <td>{canal}</td>
              <td>{timer}</td>
              <td>

                <button>Ver mensagem</button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
      
    ); 
    
}

export default Message;