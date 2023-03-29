import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: 'Inter',
        htmlFontSize: 15,
    },
    palette: {
        primary: {
            main: '#DAA520',
            dark: '#F4A460',
            light: '#F5DEB3',
            contrastText: '#000',
        },
    },
});
