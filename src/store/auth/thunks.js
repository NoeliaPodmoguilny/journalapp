import { loginWithEmailPass, logoutFirebase, registerUserWithEmailPass, singInWithGoogle } from "../../firebase/providers"
import { checkingCredential, login, logout } from "./authSlice"

export const checkingAuth = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredential())
    }
}

export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredential())
        const result = await singInWithGoogle()

        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch(checkingCredential());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPass({ email, password, displayName });
        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, displayName, email, photoURL }))

    };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {

        dispatch(checkingCredential());

        const result = await loginWithEmailPass({ email, password });
        console.log(result);

        if (!result.ok) return dispatch(logout(result))
        dispatch(login(result))

    };
}

export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase()

        dispatch(logout())
    }
}