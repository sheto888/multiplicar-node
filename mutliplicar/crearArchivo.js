const fs = require('fs')
const colors = require('colors')

const listarTabla = (base, limite = 1) => {

    console.log('========================='.red)
    console.log(`====Tabla del ${base}========`.green)
    console.log('========================='.blue)

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`.yellow);
    }



}



const crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido (\" ${base} \") debe de ser un numero para crear la tabla`)
        }

        let tabla = ''

        for (let i = 1; i <= limite; i++) {

            let res = base * i
            tabla += (`${base} * ${i} = ${res}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err) reject(err)
            else resolve(`se creo la tabla del ${base} correctamnete con el nombre de archivo: tabla-${base}.txt`)

        })


    })

}



module.exports = {
    crearArchivo,
    listarTabla
}