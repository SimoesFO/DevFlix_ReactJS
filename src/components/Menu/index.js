import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a to="/">
        <img src={Logo} className="Logo" title="Dev Flix" alt="Dev Flix" />
      </a>
      
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Ví­deo
      </Button>

      {/*
      <ButtonLink className="ButtonLink" href="/">
        Novo Vídeo
      </ButtonLink>
      */}
    </nav>
  )
}

export default Menu