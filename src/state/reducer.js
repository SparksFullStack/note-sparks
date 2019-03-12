const initialState = {
    notes: [{ title: 'test', content: 'i like turtles'}],
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default reducer;