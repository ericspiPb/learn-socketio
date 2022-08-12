import { io } from 'socket.io-client';

const uri = 'ws://127.0.0.1';

const socket = io(uri, {
  transports: ['websocket'],
  reconnection: true,
  withCredentials: true,
});

socket.on('connect', function () {
  console.log('connected', uri);
  console.log('socket id', socket.id);
});

socket.on('connect_error', function (error) {
  console.log('connected_error', socket.id);
  console.log('socket error', error);
});

socket.on('disconnect', () => {
  console.log('connected', uri);
});

socket.connect();
console.log('connected ?', socket.connected);
