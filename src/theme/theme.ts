import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: 'Inter',
    },
    palette: {
        primary: {
            main: 'hsl(43, 74%, 75%)',
            dark: '#F4A460',
            light: 'hsl(43, 74%, 85%)',
            contrastText: '#000',
        },
    },
});
