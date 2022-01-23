import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../userContext';

function Home() {

    var history = useHistory();
    const { userName, setUserName, authorized, setAuthorized } = useContext(UserContext);

    var styles = {
        signOutButton: {
            color: "#365A0C",
            position: "absolute",
            right: 0,
            top: 0,
            margin: '12px 25px 0 0',
        },

        welcomeSentence: {
            color: "#365A0C",
            margin: "12vh 0 0 6vw",
            fontFamily: "Montserrat",
            fontWeight: 500,
        }
    }

    const handleSignOut = () => {
        setAuthorized(true);
        setUserName("");
        history.push('/');
    }

    if(authorized) {
        return (
            <Box>
                <Button variant="text" sx={styles.signOutButton} onClick={handleSignOut}>Sign Out</Button>
                <Typography variant="h3" sx={styles.welcomeSentence}>Welcome Back, <b>{userName}</b></Typography>
            </Box>
        );
    } else {
        return <Redirect to="/" />
    }
}

export default Home;