import { CHAT_REQUEST } from '../Redux/const';


export const fetchChat = () => {
    console.log('fetchChat')
    return {
        type : CHAT_REQUEST
    }
}