import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import Select from "../../components/Select";
import api from "../../services/api";
import Swal from "sweetalert2";



const Register = () => {
  const [optionSelectedGatilho, setOptionSelectedGatilho] = useState('');
  const [optionSelectedCanal, setOptionSelectedCanal] = useState('');
  const [getOptionsTriggers, setGetOptionsTriggers] = useState([]);
  const [getOptionsChannels, setGetOptionsChannels] = useState([]);
  const [timer, setTimerSelected] = useState("");
  const [messages, setMessageSelected] = useState("");
  const history = useHistory();

  console.log(timer);
  console.log(messages);


  const handleGetOptionsTriggers = async () => {
    try {
      const response = await api.get("/triggers");
      console.log("triggers",response.data);

      const getOptionsFomattedTriggers = response.data.map(item => {
        return {
          label: item.name,
          value: item.name,
        };
      })

      setGetOptionsTriggers(getOptionsFomattedTriggers);
    } catch (error) {
          toast.error(
            "Erro ao tentar acessar o servidor preecione ctrl + f5 ou contate o suporte",
            {
              position: toast.POSITION.BOTTOM_CENTER,
            }
          );
    }
  }; 

  useEffect(() => {
    handleGetOptionsTriggers();
  }, [])

  const handleGetOptionsChannels = async () => {
    try {
      const response = await api.get('/channels');
      console.log("channels", response.data);

      const getOptionsFomattedChannels = response.data.map(item =>{
        return {
          label: item.name,
          value: item.name,
        };
      })
      setGetOptionsChannels(getOptionsFomattedChannels);

    } catch (error) {
          toast.error(
            "Erro ao tentar acessar o servidor preecione ctrl + f5 ou contate o suporte",
            {
              position: toast.POSITION.BOTTOM_CENTER,
            }
          );

    }
  };

  useEffect(() => {
    handleGetOptionsChannels();
  }, [])

  const handlePostMessages = () => {
  const aleatorio = Math.floor(Math.random() * 100);
  console.log("resultado",aleatorio);

  }

  useEffect(() => {
        handlePostMessages();
  }, [])

  const handleOnChangeGatilho = (event) => {
    setOptionSelectedGatilho(event.target.value)
  }

  const handleOnChangeCanal = (event) => {
    setOptionSelectedCanal(event.target.value);
   };
      
   const notifySwal = (message) => {
     Swal.fire({
        icon: "error",
        title: "Mensagem",
        text: message,
        footer: "<Criado por zap system",
    });
  };
      

  return (
    <>
      <div className="container_cadastro">
        <div className="container_actions">
          <h2>Messages</h2>
          <div className="div_actions_button">
            <button onClick={() => history.goBack()}>Voltar</button>

            <button
              className="cadastro_btn2"
              onClick={() => notifySwal("jjdjdjdjdjjdjdjdjdjdjdj")}
            >
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
      <ToastContainer autoClose={false} />
    </>
  );
};

export default Register;
