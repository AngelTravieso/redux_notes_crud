import { loginWithEmailAndPassword, signInWithGoogle } from '../../firebase/providers';
import { login, logout, checkingCredentials } from './';


export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials );
    }
}


export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();

        if(!result.ok) return dispatch( logout(result.errorMessage) );

        dispatch( login(result));
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


export const startLogout = () => {
    return async( dispatch ) => {
        dispatch( logout({}) )
    }
}