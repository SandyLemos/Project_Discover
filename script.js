// verificação automática quando carregar a página
window.onload = function () {
  const html = document.documentElement // pega o html
  const img = document.querySelector("#profile img") // pega a img do meu perfil

  // verifica se já está no modo claro
  if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Alessandra usando óculos, fundo amadeirado com parede branca."
    )
  }
}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Alessandra usando óculos e casaco felpudo rosa e branco."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Alessandra usando óculos, fundo amadeirado com parede branca."
    )
  }

}
