import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Navbar } from "./Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    } 
    h1, h2, h3 {
        font-family: 'Russo One', cursive;
    }
`


function App() {
    return (
        <>
            <GlobalStyle/>
            <Navbar />
        </>
    );
}

export default App;
