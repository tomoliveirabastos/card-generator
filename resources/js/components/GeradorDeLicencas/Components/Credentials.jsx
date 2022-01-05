import { toBase64 } from '../Utils'
import React from "react";

import html2canvas from 'html2canvas';

export default function Credentials(props) {
    const pessoa = props.pessoa
    async function convToCanvas() {
        const canvas = await html2canvas(document.querySelector('#card-licenca-div'))
        const linkSource = canvas.toDataURL()
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = 'image';
        downloadLink.click();
        downloadLink.remove()
    }
    
    return (
        <React.Fragment>
            <div className="col-md-12">
                <label htmlFor="">Nome completo</label>
                <input type="text" maxLength={25} className="form-control"
                    onChange={e => {
                        pessoa.nome = e.currentTarget.value;
                        props.callbackFn(pessoa)
                    }}
                />
            </div>

            <div className="col-md-12">
                <label htmlFor="">Descrição</label>
                <input type="text" className="form-control"
                    onChange={e => {
                        pessoa.descricao = e.currentTarget.value
                        props.callbackFn(pessoa)
                    }}
                />
            </div>

            <div className="col-md-12">
                <label htmlFor="">Imagem</label>
                <input type="file" className="form-control"
                    onChange={async e => {
                        const a = await toBase64(e.currentTarget)
                        pessoa.base64 = a;
                        props.callbackFn(pessoa)
                    }}
                />
            </div>

            <div className="col-md-12">
                <label htmlFor="">Cor de fundo</label>
                <input type="color" className="form-control" onChange={e => {
                    pessoa.fundo = e.target.value
                    props.callbackFn(pessoa)
                }} />
            </div>
            <button onClick={convToCanvas} className="btn btn-primary form-control">
                Baixar licença
            </button>
        </React.Fragment>
    )
}