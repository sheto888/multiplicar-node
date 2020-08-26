const { argv } = require('./config/yargs')
const colors = require('colors')

const { crearArchivo, listarTabla } = require('./mutliplicar/crearArchivo')


let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(console.log)
            .catch(console.log)
        break;



    default:
        console.log('comando no reconocido');
}



//let parametro = argv[2]
//let base = parametro.split('=')[1]