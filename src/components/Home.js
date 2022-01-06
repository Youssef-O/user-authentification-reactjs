import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {

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

    return ( 
        <Box>
            <Button variant="text" sx={styles.signOutButton}>Sign Out</Button>
            <Typography variant="h3" sx={styles.welcomeSentence}>Welcome Back, <b>YSSF</b></Typography>
        </Box>
    );
}

export default Home;