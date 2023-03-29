import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: 'Inter',
    },
    palette: {
        primary: {
            main: 'hsl(43, 74%, 80%)',
            dark: '#F4A460',
            light: 'hsl(43, 74%, 90%)',
            contrastText: '#000',
        },
    },
});
