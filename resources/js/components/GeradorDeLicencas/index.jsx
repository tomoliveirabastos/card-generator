import ReactDOM from 'react-dom';
import App from './App';
import './card.css'

const elem = document.getElementById('gerador-de-licencas');

if(elem){
    ReactDOM.render(<App />, elem);
}
