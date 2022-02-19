import { ajax } from './ajax.js'
import { RUTA } from './main.js'
import { mostrarConsejo } from './mostrarconsejo.js'

export function consultaConsejo() {

  try {
    let servicio = RUTA

    let parametros = {
      method: "GET",
      mode: "cors",
    }

    ajax(servicio, parametros, 'json')
      .then(consejo => {

        mostrarConsejo(consejo)

      }, (error) => {
        //se rechaza la promesa
        alert(error)
      })

  } catch (error) {
    alert(error)
  }

}

