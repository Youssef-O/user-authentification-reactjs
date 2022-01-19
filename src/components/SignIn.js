import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function SignIn() {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const styles = {
        signUpButton: {
            position: 'absolute', 
            top: 0, 
            right: 0, 
            margin: '12px 25px 0 0',
            color: '#365A0C'
        },
        
        container: {
            backgroundColor: '#FFFFFF',
            height: '50vh',
            minHeight: '250px',
            width: '33vw',
            minWidth: '350px',
            margin: '12vh auto 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '25px 0'
        },

        signInLabel: {
            fontWeight: '600'
        },

        textField: {
            width: '70%',
        },

        signInButton: {
            width: '70%', 
            padding: '9px 0', 
            backgroundColor: '#365A0C', 
            '&:hover': {
                backgroundColor: '#538C12'
            }
        }
    }

    const submitHandler = (data) => {

        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            history.push("/profile", data.userName);
        })
    }

    return ( 
        <Box 
            component="form"
            onSubmit={ handleSubmit(submitHandler) }
        >
            <Button variant="text" sx={styles.signUpButton} onClick={() => history.push("/signup")}>Sign up</Button>
            <Paper elevation={2} sx={styles.container}>
                <Typography variant='h4' sx={styles.signInLabel}>Sign In</Typography>
                <TextField 
                    label="Email" 
                    variant="standard" 
                    color="primary" 
                    sx={styles.textField} 
                    {...register('email', { 
                            required: "Email is required", 
                            pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, 
                            message: "Enter a valid email"}})
                    }
                    error={errors.email ? true : false}
                    helperText={errors.email?.message} 
                />
                <TextField 
                    label="Password" 
                    variant="standard" 
                    color="primary" 
                    sx={styles.textField} 
                    type="password"
                    {...register('password', { 
                            required: "Password is required", 
                            minLength: {
                                value: 4, 
                                message: "Password must be more than 4 characters"
                            }
                    })}
                    error={errors.password ? true : false}
                    helperText={errors.password?.message} 
                />
                <Button 
                    variant="contained" 
                    sx={styles.signInButton}
                    type="submit"
                >
                    Sign in
                </Button>
            </Paper>
        </Box>
    );
}

export default SignIn;