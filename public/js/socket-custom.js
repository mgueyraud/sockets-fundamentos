var socket = io();

// socket.on es para escuchar informacion
socket.on('connect', function() {
    console.log("conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("desconectado al servidor");
});

//socket.emit es para enviar informacion

socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server:', resp.resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});