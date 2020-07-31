import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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

  
  useEffect(() => {
    const URL = `http://localhost:8080/categoria`;
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        setCategorias([
          ...response
        ]);
      });
  }, [])

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
          type='textarea'
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

        <Button>
          Cadastrar
        </Button>

        {
          categorias.length === 0 && (
            <div>
              Loading...
            </div>
          )
        }
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