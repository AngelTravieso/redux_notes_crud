import { 
    loginWithEmailAndPassword,
    logoutFirebase,
    registerUserWithEmailAndPassword,
    signInWithGoogle
} from '../../firebase/providers';
import { login, logout, checkingCredentials } from './';


export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials );
    }
}

export const startCreatingUserWithEmailAndPassword = ({ displayName, email, password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailAndPassword({ displayName, email, password })

        if(!ok) return dispatch( logout({ errorMessage }));

        dispatch( login({ uid, email, displayName, photoURL }) )
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
        await logoutFirebase();
        dispatch( logout({}) )
    }
}