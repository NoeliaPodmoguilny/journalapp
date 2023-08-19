import { useMemo } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { Google } from "@mui/icons-material"
import { Grid, Typography, Link, TextField, Button, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { checkingAuth, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";


export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch()
    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    });

    const isAuthenticating = useMemo(() => status === 'checking', [status]); //si el status cambia se obtiene un nuevo valor

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }))
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
    }

    return (
        <AuthLayout title='Login'>
            <form
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Correo'
                            type='email'
                            placeholder='ejemplo@gmail.com'
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='contraseña'
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid
                        container
                        display={!!errorMessage ? '' : 'none'}
                        sx={{ mt: 2, mb: 1 }}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type='submit'
                                variant='contained'
                                fullWidth
                            > Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                variant='contained'
                                fullWidth
                                onClick={onGoogleSignIn}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}> Google </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to='/auth/register'>
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
