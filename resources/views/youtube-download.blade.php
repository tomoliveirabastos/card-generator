<input type="text" id="videoUrl" />
<a href="#" id="btnBaixar">Baixar</a>
<button onclick="enviar()">Enviar</button>

<script>
    async function enviar() {
        const btnBaixar = document.querySelector('#btnBaixar')
        const url = document.querySelector('#videoUrl').value;
        const res = await fetch(window.location.href, {
            method: 'POST',
            body: JSON.stringify({
                videoUrl: url
            }),
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            }
        })

        const blob = await res.blob();

        const newUrl = window.URL.createObjectURL(blob);

        btnBaixar.download = "video.mp4";
        btnBaixar.href = newUrl

        alert('pode baixar')
    }
</script>
