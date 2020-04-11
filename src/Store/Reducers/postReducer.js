const initState = {
    

}

const postReducer = (state = initState,action) => {
    switch(action.type){
        case 'CREATE_POST':
        console.log('created project', action.post)
        return state;
        case 'CREATE_POST_ERROR':
        console.log('created project error', action.err)
        return state;
        default:
            return state;
    }

}

export default postReducer