import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import FooterGithub from '../GeradorDeLicencas/Components/FooterGithub';
import { v4 } from 'uuid'
import '../card.css'

export default function Main() {
    const [videoUrl, setVideoUrl] = useState("")
    const [podeBaixar, setPodeBaixar] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    async function enviar() {
        setIsLoading(true)
        setPodeBaixar(false)

        const res = await fetch(window.location.href, {
            method: 'POST',
            body: JSON.stringify({
                videoUrl: videoUrl
            }),
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            }
        })

        if (res.ok) {
            try {
                const blob = await res.blob();

                const newUrl = window.URL.createObjectURL(blob);

                setPodeBaixar(true)

                const btnBaixar = document.querySelector('#btnBaixar')

                btnBaixar.download = `${v4()}.mp4`;

                btnBaixar.href = newUrl

                setIsLoading(false)

            } catch (err) {
                setIsLoading(false)
                alert('Vídeo não encontrado')
            }

        } else {
            setIsLoading(false)
            alert('Vídeo não encontrado')
        }
    }


    return (
        <React.Fragment>
            <div className="container" align="center" style={{
                marginTop: 100,
            }}>
                <div className="col-md-4" style={{
                    border: '1px #999 solid',
                    padding: 20,
                    borderRadius: 10
                }}>
                    <FooterGithub />
                    <h3>Download youtube vídeo</h3>
                    <br />
                    {isLoading && <div className="loader"></div>}
                    <br />
                    <input type="text" placeholder="Link do vídeo" className="form-control" onChange={e => setVideoUrl(e.currentTarget.value)} />
                    <br />
                    <button
                        disabled={isLoading}
                        className="btn btn-primary form-control"
                        onClick={enviar}>Pesquisar</button>
                    <br />
                    <br />
                    {podeBaixar && <a href="#" className="btn btn-warning form-control" id="btnBaixar">Baixar vídeo</a>}
                </div>
            </div>
        </React.Fragment>)
}

const divYoutube = document.querySelector('#div-youtube')

if (divYoutube) {
    ReactDOM.render(<Main />, divYoutube)
}
