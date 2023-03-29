import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Link } from '@mui/material';

// export const StyledAppBar = styled(AppBar)(({ theme }) => ({
//     position: 'static',
//     top: 0,
//     boxShadow: 'none',
//     paddingBottom: '10vh',
//     backgroundColor: theme.palette.primary.light,
// }));

export const StyledNavBar = styled('nav')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    position: 'static',
    top: 0,
    boxShadow: 'none',
    padding: '5vh 0',
    backgroundColor: theme.palette.primary.light,

    a: {
        textDecoration: 'none',
        padding: '5px',
        color: theme.palette.primary.contrastText,
        '&:hover, &.activated': {
            color: theme.palette.primary,
        },
        '&.activated': {
            borderBottom: '.4rem solid #0094e2',
        },
    },
}));

export const StyledNavLink = styled(Link)(({ theme }) => ({
    opacity: 1,
}));
