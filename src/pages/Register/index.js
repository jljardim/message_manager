import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Select from "../../components/Select";
import api from "../../services/api";
import Swal from "sweetalert2";

const Register = () => {
  const [optionSelectedGatilho, setOptionSelectedGatilho] = useState("");
  const [optionSelectedCanal, setOptionSelectedCanal] = useState("");
  const [getOptionsTriggers, setGetOptionsTriggers] = useState([]);
  const [getOptionsChannels, setGetOptionsChannels] = useState([]);
  const [timer, setTimerSelected] = useState("");
  const [messages, setMessageSelected] = useState("");
  const history = useHistory();

  const handleGetOptionsTriggers = async () => {
    try {
      const response = await api.get("/triggers");
      const getOptionsFomattedTriggers = response.data.map((item) => {
        return {
          label: item.name,
          value: item.name,
        };
      });
      setGetOptionsTriggers(getOptionsFomattedTriggers);
    } catch (error) {
     Swal.fire({
       icon: "error",
       title: "Mensagem",
       text: "Erro 404 /Triggers contate o suporte",
     });
    }
  };

  useEffect(() => {
    handleGetOptionsTriggers();
  }, []);

  const handleGetOptionsChannels = async () => {
    try {
      const response = await api.get("/channels");
    
      const getOptionsFomattedChannels = response.data.map((item) => {
        return {
          label: item.name,
          value: item.name,
        };
      });
      setGetOptionsChannels(getOptionsFomattedChannels);
    } catch (error) {
           Swal.fire({
             icon: "error",
             title: "Mensagem",
             text: "Erro 404 /Channels contate o suporte",
           });
    }
  };

  useEffect(() => {
    handleGetOptionsChannels();
  }, []);

  const handlePostMessages = async () => {
    try {
      const response = await api.post("/messages", {
        channel: optionSelectedCanal,
        trigger: optionSelectedGatilho,
        timer: timer,
        message: messages,
      });
      Swal.fire({
        icon: "success",
        title: "Mensagem",
        text: "Ação realizado com sucesso",
      });
      console.log("Cadas post", response);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Mensagem",
        text: "404 / MESSAGES confira os campos e tente novamente ou contate o suporte",
      });
    }
  };

  const handleOnChangeGatilho = (event) => {
    setOptionSelectedGatilho(event.target.value);
  };

  const handleOnChangeCanal = (event) => {
    setOptionSelectedCanal(event.target.value);
  };

  return (
    <>
      <div className="container_cadastro">
        <div className="container_actions_cadastro">
          <h2>Cadastro</h2>
          <div className="div_actions_button">
            <button onClick={() => history.goBack()}>Voltar</button>

            <button className="cadastro_btn2" onClick={handlePostMessages}>
              Cadastrar
            </button>
          </div>
        </div>

        <div className="container_dados">
          <div className="campo_cadastro">
            <Select
              titleLabel="Gatilho:"
              value={optionSelectedGatilho}
              options={getOptionsTriggers}
              onChange={handleOnChangeGatilho}
            />
          </div>

          <div className="campo_cadastro">
            <Select
              titleLabel="Canal:"
              value={optionSelectedCanal}
              options={getOptionsChannels}
              onChange={handleOnChangeCanal}
            />
          </div>

          <div className="campo_cadastro">
            <label>Timer:</label>
            <input
              value={timer}
              onChange={(event) => setTimerSelected(event.target.value)}
            ></input>
          </div>
        </div>
        <div className="campo_cadastro_textarea">
          <label>Mensagens:</label>
          <textarea
            value={messages}
            onChange={(event) => setMessageSelected(event.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Register;
