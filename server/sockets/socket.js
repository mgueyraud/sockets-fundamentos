const { io } = require('../server');

io.on('connection', (client) => {

    console.log("Usuario ConectadoS");

    client.emit('enviarMensaje', {
        usuario: "Admin",
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log("Usuario Desconectado");
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        // emitir el mensaje para que todos los usuarios conectados vean
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!'
        //     });

        // }

    });
});