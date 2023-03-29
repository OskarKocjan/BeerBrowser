import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: 'Inter',
    },
    palette: {
        primary: {
            main: 'hsl(43, 74%, 49%)',
            dark: '#F4A460',
            light: 'hsl(43, 74%, 85%)',
            // light: '#F5DEB3',
            contrastText: '#000',
        },
    },
});
