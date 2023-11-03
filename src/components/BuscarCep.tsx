import React, {useState} from 'react';
import axios from 'axios';

const BuscaCep: React.FC=() => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  const buscarCep = async (cep: string) => {
    try{
      const response = await axios.get('https://viacep.com.br/ws/${cep}/json/')
      setEndereco(response.data.endereco);
    } catch(error) {
      console.log(error);
    }
    //** Tratamento de Exceção */
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    buscarCep(cep)
  }
    return(
      <div>
        <h1>Aula State e Axios</h1>
        <form onSubmit={handleSubmit}>
          <label>Informe o cep</label>
          <input
              type="text"
              value={cep}
              onChange={(e)=>setCep(e.target.value)}
          />
          <button type='submit'>Pesquisar</button>
        </form>
        {endereco && <p>Endereco: {endereco}</p>}
      </div>
    )

}

export default BuscaCep;