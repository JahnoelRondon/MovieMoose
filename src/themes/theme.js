import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#111111"
        },
        secondary: {
            main: red[500]
        }
    },
});

