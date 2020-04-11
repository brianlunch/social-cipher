const initState = {
    authError: null
}

const authReducer = (state = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log("ERRROOR");
            return {
                ...state,
                authError: 'Login Failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('success');
            return{
                ...state,
                authError:null
            }
        case 'SIGN_OUT_SUCCESS':
            console.log('Sined Out');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('sign up success');
            return{
                ...state,
                authError:null
            }

        case 'SIGNUP_SUCCESS':
            console.log('sign up success');
            return{
                ...state,
                authError:null
            }

        case 'SIGNUP_FAILED':
            console.log('sign up error');
            return{
                ...state,
                authError: action.err.message
            }
            case 'CREATE_GROUP_ERROR':
                    console.log('Group up error');
                    return{
                        ...state,
                        authError: action.err.message
                    }
                    case 'CREATE_GROUP':
                            console.log('Group up created group');
                            return{
                                ...state,
                                authError: null
                            }

        default:
            return state;
    }
}

export default authReducer