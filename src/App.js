import React, {useState} from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
    }
    h1, h2, h3 {
        font-family: 'Russo One', cursive;
    }
`


function App() {
    return (
        <>
            <h1>Привет, как дела?</h1>
            <GlobalStyle/>
        </>
    );
}

export default App;
