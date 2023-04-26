const WebSocket = require('ws');

const server = new WebSocket.Server({ host: 'localhost', port: 8080 });



server.on('connection', (socket) => {
  console.log('Cliente conectado');

  socket.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);

    // Envía un mensaje de vuelta al cliente
    socket.send(`Servidor recibió el mensaje: ${message}`);
  });

  socket.on('close', () => {
    console.log('Cliente desconectado');
  });
});

