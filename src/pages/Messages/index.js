import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Swal from "sweetalert2";
import Select from "../../components/Select";

const Message = () => {
  const [gatilhoSelected, setGatilhoSelected] = useState("");
  const [canalSelected, setCanalSelected] = useState("");
  const [timerSelected, setTimerSelected] = useState("");
  const [getOptionsTriggers, setGetOptionsTriggers] = useState([]);
  const [getOptionsChannels, setGetOptionsChannels] = useState([]);
  const [filter, setFilter] = useState([]);

  const hangleGetMessagesTriggers = async () => {
    try {
      const response = await api.get("/triggers");
      const getTriggersFormatted = response.data.map((item) => {
        return {
          value: item.name,
          label: item.name,
        };
      });
      setGetOptionsTriggers(getTriggersFormatted);
    } catch (error) {
       Swal.fire({
         icon: "error",
         title: "Mensagem",
         text: "Error 404 /Triggers tente novamente ou contate o suporte",
       });
    }
  };

  useEffect(() => {
    hangleGetMessagesTriggers();
  }, []);

  const handleGetMessagesChannels = async () => {
    try {
      const response = await api.get("/channels");
      const getChannelsFormatted = response.data.map((item) => {
        return {
          label: item.name,
          value: item.name,
        };
      });
      setGetOptionsChannels(getChannelsFormatted);
    } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Mensagem",
          text: "Error 404 /Channels tente novamente ou contate o suporte",
        });
    }
  };

  useEffect(() => {
    handleGetMessagesChannels();
  }, []);

  const handleOnChangeGatilho = (event) => {
    setGatilhoSelected(event.target.value);
  };

  const handleOnChangeCanal = (event) => {
    setCanalSelected(event.target.value);
  };

  const notifySwalMessages = (message) => {
    Swal.fire({
      icon: "info",
      title: "Mensagem",
      text: message,
      footer: "<Criado por zap system",
    });
  };

  const handleOnClick = async () => {
    try {
      const response = await api.get(
        `/messages?channel_like=${canalSelected}&trigger_like=${gatilhoSelected}&timer_like=${timerSelected}`
      );
      setFilter(response.data);
    } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Mensagem",
            text: "Error 404 /Filters tente novamente ou contate o suporte",
          });
    }
  };
  useEffect(() => {
    handleOnClick();
  }, []);

  return (
    <>
      <div className="container_actions_messages">
        <div className="div_h2_message">
          <h2>Messages</h2>
          <div className="div_actions_button">
            <button onClick={handleOnClick} className="btn2_messages">
              Pesquisar
            </button>
            <Link to="/register">
              <button>Nova mensagem</button>
            </Link>
          </div>
        </div>

        <div className="container_dados">
          <div className="campo_cadastro">
            <Select
              titleLabel="Gatilho"
              value={gatilhoSelected}
              options={getOptionsTriggers}
              onChange={handleOnChangeGatilho}
            />
          </div>
          <div className="campo_cadastro">
            <Select
              titleLabel="Canal:"
              value={canalSelected}
              options={getOptionsChannels}
              onChange={handleOnChangeCanal}
            />
          </div>

          <div className="campo_cadastro">
            <label>Timer:</label>
            <input
              value={timerSelected}
              onChange={(event) => setTimerSelected(event.target.value)}
            />
          </div>
        </div>
        <div>
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
              {filter.map((item) => {
                return (
                  <tr>
                    <td>{item.trigger}</td>
                    <td>{item.channel}</td>
                    <td>{item.timer}</td>
                    <td>
                      <button onClick={() => notifySwalMessages(item.message)}>
                        ver mensagem
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Message;
