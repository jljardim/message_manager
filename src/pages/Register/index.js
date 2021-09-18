import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Select from "../../components/Select";
import api from "../../services/api";

const Register = () => {
  const [optionSelectedGatilho, setOptionSelectedGatilho] = useState('');
  const [optionSelectedCanal, setOptionSelectedCanal] = useState('');
  const [optionsTriggers, setOptionsTriggers] = useState([]);
  const [optionsChannels, setOptionsChannels] = useState([]);
  const [timer, setTimerSelected] = useState("");
  const [messages, setMessageSelected] = useState("");
  const history = useHistory();

  console.log(timer);
  console.log(messages);


  const handleGetOptionsTriggers = async () => {
    try {
      const response = await api.get("/triggers");
      console.log("triggers",response.data);

      const optionsFomattedTriggers = response.data.map(item => {
        return {
          label: item.name,
          value: item.name,
        };
      })

      setOptionsTriggers(optionsFomattedTriggers);
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect(() => {
    handleGetOptionsTriggers();
  }, [])

  const handleGetOptionsChannels = async () => {
    try {
      const response = await api.get('/channels');
      console.log("channels", response.data);

      const optionsFomattedChannels = response.data.map(item =>{
        return {
          label: item.name,
          value: item.name,
        };
      })
      setOptionsChannels(optionsFomattedChannels);

    } catch (error) {
      console.log(error);
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

  const handleChangeEventGatilho = (event) => {
    setOptionSelectedGatilho(event.target.value)
  }

  const handleChangeEventCanal = (event) => {
    setOptionSelectedCanal(event.target.value);
   };

  return (
    <>
      <div className="container_cadastro">
        <div className="container_actions">
          <h2>Messages</h2>
          <div className="div_actions_button">
            <button onClick={() => history.goBack()}>Voltar</button>

            <button className="cadastro_btn2">Cadastrar</button>
          </div>
        </div>

        <div className="container_dados">
          <div className="campo_cadastro">
            <Select
              titleLabel="Gatilho:"
              value={optionSelectedGatilho}
              options={optionsTriggers}
              onChange={handleChangeEventGatilho}
            />
          </div>

          <div className="campo_cadastro">
            <Select
              titleLabel="Canal:"
              value={optionSelectedCanal}
              options={optionsChannels}
              onChange={handleChangeEventCanal}
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
