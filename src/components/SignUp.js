import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignUp() {
    
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var history = useHistory();
    
    var styles = {
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
    
    return ( 
        <Box
            component="form"
        >
            <Button variant="text" sx={styles.SignInButton} onClick={() => history.push("/")}>Sign In</Button>
            <Paper sx={styles.container}>
                <Typography variant="h4" sx={styles.signInLabel}>Sign Up</Typography>
                <TextField label="Name" variant="standard" color="primary" sx={styles.textField} onChange={(e) => setName(e.target.value)} value={name} />
                <TextField label="Email" variant="standard" color="primary" sx={styles.textField} onChange={(e) => setEmail(e.target.value)} value={email} />
                <TextField label="Password" variant="standard" color="primary" sx={styles.textField} onChange={(e) => setPassword(e.target.value)} value={password} />
                <Button variant="contained" sx={styles.signInButton} onClick={() => history.push("/")}>Sign Up</Button>
            </Paper>
        </Box>
    );
}

export default SignUp;