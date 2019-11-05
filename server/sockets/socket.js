const { io } = require('../server');

// conocer cuando un usuario se conecta al server
io.on("connection", client => {
    console.log("Sevidor recibiendo conexiones");

    // enviar informacion al cliente
    client.emit("enviarMensaje", {
        usuario: "Administrador",
        mensaje: "Bienvenido a la aplicación"
    });

    // cuando un cliente pierde la conexion
    client.on("disconnect", () => {
        console.log("Usuario Desconectado");
    });

    // escuchar cliente
    client.on("enviarMensaje", (data, callback) => {

        console.log('Recibiendo mensaje: ', data);

        // emitir para todos los usuarios
        client.broadcast.emit('enviarMensaje', data); // data es un objeto

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: "NOMBRE ENVIADO CORRECTAMENTE"
        //     });
        // } else {
        //     callback({
        //         respuesta: "FALTA EL NOMBRE!!!!"
        //     });
        // }
    });
});