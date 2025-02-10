import './CSS/BoasVindas.css';

function BoasVindas({nome, mensagem, setUser}) {

  return (
    <div className="boas-vindas">
        <h2 onClick={() => { nome==='Vitor' ? setUser('Manassés') : setUser('Vitor')}}>Olá {nome}</h2>
        <h4>
          {mensagem}
        </h4>
    </div>
  );
};

export default BoasVindas;