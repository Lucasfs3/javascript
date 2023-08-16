var texto = window.document.getElementById('texto')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()

function carregar() {
    texto.innerHTML = `agora são ${hora} horas`

    if (hora >= 6 && hora < 12) {
        img.src = "fotomanha.png"
        document.body.style.backgroundColor = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        img.src = "fototarde.png"
        document.body.style.backgroundColor = "#b9846f"
    } else {
        img.src = "fotonoite.png"
        document.body.style.backgroundColor = "#515154"
    }
}