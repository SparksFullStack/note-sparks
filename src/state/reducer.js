const initialState = {
    notes: [{ title: 'test', content: 'i like turtles'}, { title: 'test', content: 'i like pandas'}, { title: 'test', content: 'i like sloths'}],
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default reducer;