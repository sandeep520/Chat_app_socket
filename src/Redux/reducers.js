const initialState = {
    loading: false,
}


const chatRequest = (state,action) => {
    console.log("Sgfdgfd")
     return {
            ...state,
            loading: true
        }
}


const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'CHAT_REQUEST': return chatRequest(state,action)


        default:
            return state;
    }
}


export default reducer;