import io from 'socket.io-client';
let socket = io(`${process.env.REACT_APP_SERVER}`, {transports:['websocket'], 'forceNew':false });

    export default socket;