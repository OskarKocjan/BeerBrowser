import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    html, body, #app, #app>div {
        height: 100%
}
    #root{
        margin:0 auto;
        
    }
    button {
            padding: 0;
            border: none;
            background: none;
        },
`;
