import { loginWithEmailAndPassword } from '../../firebase/providers';
import { login, logout, checkingCredentials } from './';


export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials );
    }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailAndPassword({email, password});

        if(!ok) return dispatch( logout({ errorMessage }) );

        dispatch( login({ uid, email, displayName, photoURL }) );
    }
}