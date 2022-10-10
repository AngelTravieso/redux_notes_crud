import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
    try {
        const resp = await signInWithPopup( FirebaseAuth, googleProvider );

        const { uid, displayName, email, photoURL } = resp.user;
        
        return {
            ok: true,
            uid,
            email,
            displayName,
            photoURL,
        }

    } catch(error) {
        console.log(error);
        const errorMessage = error.errorMessage;

        return {
            ok: false,
            errorMessage,
        }
    }
}


export const loginWithEmailAndPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { uid, displayName, photoURL } = resp.user;

        return {
            ok: true,
            uid,
            displayName,
            photoURL,
        }
    } catch(error) {
        console.log(error);

        return {
            ok: false,
            errorMessage: error.message,
        }

    }
}


export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}