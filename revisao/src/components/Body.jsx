import Aviso from './Aviso';
import './CSS/Body.css';
import Demo from './Demo';

function Body() {
  return (
    <div className="body">
        <p>Empresa de LOGOS</p>
        <Aviso />
        <Demo />
    </div>
  );
};

export default Body;