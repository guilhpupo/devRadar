import React from 'react';

import './styles.css'

function DevItem({ dev, onDestroy }) {  
    
    async function destroyDev(event){      
        
        await onDestroy(dev.github_username);
    }    

    return (
        <li className="dev-item">

            <div className="destroy-dev" >
                <button onClick={destroyDev}><img src="https://cdn0.iconfinder.com/data/icons/pack-web-app-game/512/delete-cancel-512.png" alt="Excluir"></img></button>
            </div>

            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>
                {dev.bio}
            </p>
            <a href={`https://github.com/${dev.github_username}`}>Accessar perfil no Github</a>
        </li>
    );
}

export default DevItem;