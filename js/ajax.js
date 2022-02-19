export function ajax(servicio, parametros, tiporespuesta) {
    return new Promise((resolve, rejected) => {
        fetch(servicio, parametros)
            .then((resp) => {
                if (resp.ok) {
                    switch (tiporespuesta) {
                        case 'json':
                            return resp.json()
                        case 'text':
                            return resp.text()
                        case 'blob':
                            return resp.blob()
                        default:
                            throw ('Tipo de respuesta no válido')
                    }
                } else {
                    console.log(resp)
                    throw ('Algo ha ido mal en la petición')
                }
            })
            .then((mensaje) => {
                console.log(mensaje)
                resolve(mensaje)
            })
            .catch((error) => {
                rejected(error)
            })
    })
}