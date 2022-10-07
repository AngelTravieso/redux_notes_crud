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

const signInWithGoogle = async () => {

    try {

        const res = signInWithPopup( FirebaseAuth, googleProvider );
        
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