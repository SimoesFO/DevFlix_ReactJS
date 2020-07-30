import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      
      <img src={Logo} className="Logo" title="Dev Flix" alt="Dev Flix" />
      <p>
        By
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://br.linkedin.com/in/felipeoliveirasimoes">
          Felipe O. Simões
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
