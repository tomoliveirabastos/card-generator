import React, { useState } from "react";
import Credentials from "./Components/Credentials";
import MakeCard from './Components/MakeCard'
import FooterGithub from './Components/FooterGithub'

function App() {
  const [pessoa, setPessoa] = useState({
    nome: "Nome completo",
    descricao: 'Descrição da licença',
    base64: 'https://seud.org/wp-content/uploads/2020/06/nobody-homme.jpg',
    fundo: '#d6d3c9'
  })

  return (
    <React.Fragment>
      <br />
      <br />
      <h1 align="center"><FooterGithub /> Gerador de licenças</h1>
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Credentials
              pessoa={pessoa}
              callbackFn={pessoa => setPessoa({ ...pessoa })}
            />
          </div>
          <div
            style={{
              marginTop: '100px',
              width: '100%',
            }}>
            <MakeCard pessoa={pessoa} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
