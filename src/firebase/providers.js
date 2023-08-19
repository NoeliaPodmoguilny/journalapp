import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config';
import { startLoginWithEmailPassword } from '../store/auth/thunks';

// proveedores de autenticación
const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        const { displayName, uid, email, photoURL } = result.user

        return {
            ok: true,
            displayName, uid, email, photoURL
        };

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        };
    };
};

// proveedor para registrarse con ususario y passw
export const registerUserWithEmailPass = async ({ email, password, displayName }) => {

    try {
        console.log({ email, password, displayName });
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = resp.user
        console.log(resp);

        await updateProfile(FirebaseAuth.currentUser, { displayName })

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            errorMessage: error.message
        }

    };

};

// proveedor para loguear con ususario y passw
export const loginWithEmailPass = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL, displayName } = resp.user

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            errorMessage: error.message
        }

    };
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut()
}