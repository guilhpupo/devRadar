import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {

      const res = await api.get("/devs");
      
      setDevs(res.data);
    }

    loadDevs();
  }, [])

  async function handleAddDev(data) {    

    const res = await api.post('/devs', data);

    setDevs([...devs,res.data]);
  }

  async function handleDestroyDev(data){
    await api.delete(`/devs/${data}`);

    let devsArray = [];

    devs.forEach((item) => {
      if(item.github_username !== data){
        devsArray.push(item);
      }
    })
    
    setDevs(devsArray);
  }

  return (
    <div id="app">
      <aside>

        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>

      </aside>

      <main>

        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} onDestroy={handleDestroyDev} />
          ))}
        </ul>

      </main>
    </div>
  );
}


export default App;
