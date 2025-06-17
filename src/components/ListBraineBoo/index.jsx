import { useState } from 'react';
import './style.css'

const FormularioComentario = ({ onEnviar }) => {
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comentario.trim() !== '') {
      onEnviar(comentario);
      setComentario('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='n'
        type="text"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="o que você vai fazer hoje?"
      />
      <button 
        type="submit"
        className='p'>
        Enviar
      </button>
    </form>
  );
};

const ListaComentarios = ({ comentarios }) => {
  return (
    <ul>
      {comentarios.map((comentario, index) => (
        <li key={index}>
          {comentario}
        </li>
      ))}
    </ul>
  );
};

const FeedDeComentarios = () => {
  const [comentarios, setComentarios] = useState([]);

  const adicionarComentario = (comentario) => {
    setComentarios([...comentarios, comentario]);
  };

  const removerPrimeiroComentario = () => {
    if (comentarios.length > 0) {
      setComentarios(comentarios.slice(1));
    }
  };

  return (
    <div className='container'>
      <h2>⭐ A fazer ⭐</h2>
      <FormularioComentario onEnviar={adicionarComentario} />
      <button className='r' onClick={removerPrimeiroComentario}>
        Apagar
      </button>
      <ListaComentarios comentarios={comentarios} />
    </div>
  );
};

export default FeedDeComentarios;
