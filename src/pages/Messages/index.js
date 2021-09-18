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

  console.log("Quem é esse cara aqui", getOptionsChannels);
  console.log("oque ta acontecendo no filterhandle", filter);
  


  const notifySwalMessages = () => {
    Swal.fire({
      icon: "info",
      title: "Mensagem",
      text: {handleSubmit},
      footer: "<Criado por zap system",
    });
  };

  const hangleGetMessagesTriggers = async () => {
    try {
      const response = await api.get("/triggers");
      console.log("resultados da messages", response.data);

      const getTriggersFormatted = response.data.map((item) => {
        return {
          value: item.name,
          label: item.name,
        };
      });
      setGetOptionsTriggers(getTriggersFormatted);
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
    hangleGetMessagesTriggers();
  }, []);
/* 
  const getMessageofMessages = async() => {
      try {
        const response = await api.get('/messages');

        console.log("sou o log gte messages", response.data);
        setFilter(response.data);

        const getValueMassage = filter.map(item => {
          return {
            value: item.message,
          }
        })
        
      } catch (error) {
             toast.error(
               "Erro ao tentar acessar o servidor preecione ctrl + f5 ou contate o suporte",
               {
                 position: toast.POSITION.BOTTOM_CENTER,
               }
             );
      } 
    
    }
useEffect(() =>{
  getMessageofMessages();
}, []) */

  const handleSubmit = async() => {
    try {
        const response = await api.get("/messages?message=23232323");
    console.log("ola agora sou handleSumit", response.data);
    setFilter(response.data)
  
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
    handleSubmit();
  }, []);
  
 
  const handleGetMessagesChannels = async () => {
    try {
      const response = await api.get("/channels");
      console.log("resultados da messages", response.data);

      const getChannelsFormatted = response.data.map((item) => {
        return {
          label: item.name,
          value: item.name,
        };
      });
      setGetOptionsChannels(getChannelsFormatted);
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
    handleGetMessagesChannels();
  }, []);

  const handleOnChangeGatilho = (event) => {
    setGatilhoSelected(event.target.value);
  };

  const handleOnChangeCanal = (event) => {
    setCanalSelected(event.target.value);
  };

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
        <Select
          titleLabel="Gatilho"
          value={gatilhoSelected}
          options={getOptionsTriggers}
          onChange={handleOnChangeGatilho}
        />

        <Select
          titleLabel="Canal:"
          value={canalSelected}
          options={getOptionsChannels}
          onChange={handleOnChangeCanal}
        />

        <label>Timer:</label>
        <input
          value={timerSelected}
          onChange={(event) => setTimerSelected(event.target.value)}
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
            <td>{gatilhoSelected}</td>
            <td>{canalSelected}</td>
            <td></td>
            <td>
              <button onClick={notifySwalMessages}>Ver mensagem</button>
            </td>
          </tr>
        </tbody>
      </table>

      <ToastContainer autoClose={false} />
    </>
  );
};

export default Message;
