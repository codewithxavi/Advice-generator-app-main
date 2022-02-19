export function mostrarConsejo(valor) {

  let id = document.querySelector(".advice__id")
  let text = document.querySelector(".advice__text")

  id.innerText = `Advice #${valor.slip.id}`
  text.innerText = `"${valor.slip.advice}"`

}

