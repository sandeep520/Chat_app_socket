
import socketIo from 'socket.io-client';
const ENDPOINT = "http://kube.artoon.in:32234/";

let socket;

export const connectSocket = (cb) => {
    socket = socketIo(ENDPOINT, { transports: ['websocket'] });
    socket.on('connect', () => {
        console.log("=============connect=============", socket)
        cb(true)

        socket.on('resJSON', onEvent)
    })
    // cb(false)
}


export const emitEvent = (en, data) => {
    let token;

    // socket.emit('req', { en, data });
    switch (en) {
        case 'login':
            socket.emit('req', { en, data });
            break;
        case 'signup':
            socket.emit('req', { en, data });
            break;
        case 'auth':
            token = data;
            socket.emit('req', { en, token });
            break;
        case 'test':
            socket.emit('req', { en, data });
            break;
        case 'getFriends':
            token = data;
            socket.emit('req', { en, token });
            break;
        case 'chatHistory':
            socket.emit("req", {
                en: "chatHistory",
                data: {
                    recId: "61275bef8c251a7374804081"
                },
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNmMWZlYTBlNmE1MzNiZWU5MGM5Y2UiLCJpYXQiOjE2MzE2ODY5OTl9.qAGSE_DCrT7uDk7JbXZZsMh22IoCr7omZ2xfLq9-GyI"
            })
            break;
        default:
    }
}

let dataArray;
export const onEvent = (data) => {
    console.log(data)
    if (data && data.data)
        switch (data.en) {

            case 'login':
                data && data.data && localStorage.setItem('token', JSON.stringify(data.data.token))
                break;

            case 'signup':
                console.log(data.data)
                break;

            case 'auth':
                console.log("auth_success", data.data)

                break;

            case 'test':
                console.log("test")
                break;

            case 'getFriends':
                console.log("getFriends")
                localStorage.setItem('getFriends', JSON.stringify(data.data))
                console.log(data.data)
                dataArray = localStorage.setItem('getFriends', JSON.stringify(data.data))
                break;

            case 'chatHistory':
                console.log("chatHistory");
                break;

            default:
            // code block
        }
}

export { dataArray };


