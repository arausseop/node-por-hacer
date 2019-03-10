const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: descripcion,
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'Borra la tarea especificada', {
        descripcion: descripcion,
    })
    .help()
    .argv;

module.exports = {
    argv
}