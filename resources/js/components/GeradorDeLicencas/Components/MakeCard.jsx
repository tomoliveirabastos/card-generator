import React from "react";
import { v4 } from 'uuid';

const _p = '/security-licenca-code.png'
const _v4 = v4()

const WIDTH = 400

export default function MakeCard({ pessoa }) {
    return (
        <React.Fragment>
            <div id="card-licenca-div" style={{
                width: WIDTH + 30,
                background: pessoa.fundo
            }} className="card-background-ll">
                <small><i>{window.location.href}</i></small>
                <div className="card-border-ll">
                    <table style={{
                        width: WIDTH,
                        backgroundColor: pessoa.fundo
                    }}>
                        <tbody>
                            <tr>
                                <td style={{
                                    background: 'white',
                                    width: WIDTH / 2,
                                    margin: 0,
                                    textAlign: 'center'
                                }}>

                                    <div align="center" style={{
                                        backgroundColor: 'white',
                                        wordBreak: 'break-all'
                                    }}>
                                        <h5>{pessoa.nome}</h5>
                                    </div>

                                    <img src={_p} alt='' style={{
                                        width: `100%`
                                    }} />
                                </td>

                                <td style={{ width: WIDTH / 2 }}>
                                    <img
                                        style={{
                                            height: WIDTH / 2
                                        }}
                                        src={pessoa.base64}
                                        className="card-image-ll" alt="img" />
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="2" style={{ wordBreak: 'break-all' }}>
                                    <h4>{pessoa.descricao}</h4>
                                    <small>{_v4}</small>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </React.Fragment>
    )
}
