import { verificarTema, trocarTema } from "../../helpers/tema-helper.js";


const botaoTema = document.querySelector(".tema button")
const assunto = localStorage.getItem("assunto")
const body = document.querySelector("body")
const botaoJogarNovamente = document.querySelector("main  button")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

botaoJogarNovamente.addEventListener("click", jogarNovamente)

verificarTema(body, botaoTema)

function alterarAssunto() {
    
    const divIcone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `icone de ${assunto}`)
    assuntoTitulo.innerText = assunto
}

alterarAssunto()

function inserirResultado() {
    const sectionPontuacao = document.querySelector(".pontuacao")
    const divAssuntos= document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")

    sectionPontuacao.innerHTML= `
         ${divAssuntos.outerHTML}

                <strong>${pontos}</strong>

                <p>de 10</p>
    `
}

function jogarNovamente() {
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")
    window.location.href = "../../index.html"
}

inserirResultado()

