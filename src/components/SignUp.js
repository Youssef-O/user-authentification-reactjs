import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignUp() {

    const {register, formState: { errors }, handleSubmit} = useForm();
    const history = useHistory();
    
    const styles = {
        SignInButton: {
            color: '#365A0C',
            position: 'absolute',
            right: 0,
            top: 0,
            margin: '12px 25px 0 0',
        },
        
        container: {
            width: '33vw', 
            height: '50vh', 
            backgroundColor: '#FFFFFF', 
            margin: '12vh auto 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '50px 0', 
        },

        signInLabel: {
            fontWeight: '600'
        },

        textField: {
            width: '70%'
        },

        signInButton: {
            width: '70%', 
            padding: '9px 0', 
            backgroundColor: '#365A0C', 
            '&:hover': {
                backgroundColor: '#538C12'
            },
            margin: '9px 0 0'
        }
    }
    
    const submitHandler = (data) => {
        console.log("Submit Handler Called");
        console.log(data);
        history.push("/");
    }

    return ( 
        <Box
            component="form"
            onSubmit={handleSubmit(submitHandler)}
        >
            <Button variant="text" sx={styles.SignInButton} onClick={() => history.push("/")}>Sign In</Button>
            <Paper sx={styles.container}>
                <Typography variant="h4" sx={styles.signInLabel}>Sign Up</Typography>
                <TextField 
                    label="Username" 
                    variant="standard" 
                    color="primary" 
                    sx={styles.textField} 
                    {...register("userName", {required: "Username is required"})}
                    error={errors.userName ? true : false}
                    helperText={errors.userName?.message}
                />
                <TextField 
                    label="Email" 
                    variant="standard" 
                    color="primary" 
                    sx={styles.textField} 
                    {...register("email", {
                            required: "Email is required", 
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, 
                                message: "Enter a valid email"
                            }})
                    }
                    error={errors.email ? true : false}
                    helperText={errors.email?.message}
                />
                <TextField 
                    label="Password"
                    type="password"
                    variant="standard" 
                    color="primary" 
                    sx={styles.textField}
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 4,
                            message: "Password must be more than 4 characters"
                        }}
                    )}
                    error={errors.password ? true : false}
                    helperText={errors.password?.message}
                />
                <Button 
                    variant="contained" 
                    type="submit" 
                    sx={styles.signInButton} 
                >
                    Sign Up
                </Button>
            </Paper>
        </Box>
    );
}

export default SignUp;