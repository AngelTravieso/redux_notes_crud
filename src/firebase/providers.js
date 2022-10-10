import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
    try {

        const res = await signInWithPopup( FirebaseAuth, googleProvider );
        
        console.log(res)


    } catch(error) {
        console.log(error);
        const errorCode = error.errorCode;
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

        console.log(resp.user);

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