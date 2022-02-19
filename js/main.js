//imports   
import { consultaConsejo } from "./consultaconsejo.js";


// variables globales
export const RUTA = "https://api.adviceslip.com/advice"

window.onload = inicio

function inicio() {

  consultaConsejo()
  document.querySelector('.advice__dice').onclick = consultaConsejo

}