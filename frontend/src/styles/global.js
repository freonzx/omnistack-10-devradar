import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap';

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: #e5e6f0;
        -webkit-font-smoothing: antialised !important;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Roboto, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }
`
