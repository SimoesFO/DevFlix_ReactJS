import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" title="Dev Flix" alt="Dev Flix" />
      </a>
      
      <Button as='a' className="ButtonLink" href="/">
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