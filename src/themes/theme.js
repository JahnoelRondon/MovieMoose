import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';


export const theme = createTheme({
    palette: {
        primary: {
            main: "#000000"
        },
        secondary: {
            main: red[500]
        }
    },
});