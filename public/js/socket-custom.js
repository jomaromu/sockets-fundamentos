var socket = io();

// .on es para escuchar sucesos
// .emit es para enviar informacion

// conectarme al servidor
socket.on("connect", function() {
    console.log("Cliente conectado al servidor");
});

// desconectarme al servidor
socket.on("disconnect", function() {
    console.log("Perdimos conexión con el servidor");
});

// enviar informacion
socket.emit(
    "enviarMensaje", {
        usuario: "Johnny",
        mensaje: "Hola mundo"
    },
    function(respuesta) {
        console.log(respuesta);
    }
);

// escuchar informacion
socket.on("enviarMensaje", function(respuestaServidor) {
    console.log("Servidor: ", respuestaServidor);
});