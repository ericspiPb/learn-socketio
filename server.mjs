import { Server } from 'socket.io';

const io = new Server();

io.on("connection", (socket) => {
  console.log('client connected', socket.id);
});

io.listen(80)
