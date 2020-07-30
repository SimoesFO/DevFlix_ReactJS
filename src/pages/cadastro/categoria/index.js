import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    })
  }

  function handleChange(event) {
    
    setValue( 
      event.target.getAttribute('name'), 
      event.target.value 
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: </h1>

      <form onSubmit={ (event) => {
          event.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}>


        <FormField 
          label='Nome da Categoria'
          type='text'
          name='nome'
          value={values.nome}
          onChange={handleChange}
        />

        <FormField 
          label='Descrição'
          type='text'
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
        />
        

        <FormField 
          label='Cor'
          type='color'
          name='cor'
          value={values.nome}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return(
            <li key={index}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to='/'>
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;