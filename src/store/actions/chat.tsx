import io from 'socket.io-client';

const mountChat = () => () => {
    const socket = io('http://localhost:5000/chat');
    // let stack: Record<any, any>;
    let username: string;
    socket.on('connect', () => {
        socket.emit('setUserData', username);
    });
    // socket.on('onlineStack', (sta: Record<any, any>) => {
    //     stack = sta;
    // });
};

export default mountChat;
