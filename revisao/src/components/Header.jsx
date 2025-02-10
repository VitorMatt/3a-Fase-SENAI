import { FaReact } from "react-icons/fa";
import { useState } from 'react';
import BoasVindas from './BoasVindas';
import './CSS/Header.css';

function Header() {

  const [user, setUser] = useState('');
  const [message, setMessage] = useState('Você é nosso visitante N° 3.');

  const login = () => {

    const nome = prompt('Digite seu nome');

    setUser(nome);
  };

  const logout = () => {

    let s = prompt('Certeza de que deseja sair?');

    if (s.toLocaleLowerCase()==='sim') {

      setUser('');
    };
  };

  return (
    <div className="header">
      <FaReact />
      <div className='header2'>
        <p className="logo">Logo</p>
        <ol>
          <ul>Link</ul>
          <ul>Link</ul>
          <ul>Link</ul>
          <ul>Link</ul>
          <ul>Link</ul>
        </ol>
      </div>
      <div className="header3">
        {
          user 
          ?
          (
            <>
            <BoasVindas mensagem={message} nome={user} setUser={setUser} />
            <button className='log' onClick={logout}>Logout</button>
            </>
          )
          :
          <button className='log' onClick={login}>Login</button>
        }
      </div>
    </div>
  );
};

export default Header;