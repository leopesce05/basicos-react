import React from 'react';
import styled,{css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';

function ComponentesEstilizados() {

    let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380"

    const setTransitionTime=(time)=> `all ${time} ease-in-out`

    const fadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
    `

    const MyH3 = styled.h3`
    padding:2rem;
    text-align:center;
    background-color:${mainColor};
    transition: ${setTransitionTime("1s")};
    color:${({color})=>color || "#000"};
    animation:${fadeIn} 2s ease-out;

    ${(props)=> props.isButton && css`
    margin:auto;
    max-width:50%;
    border-radius:0.25rem;
    cursor:pointer;
    `} 

    &:hover{
        background-color:${mainAlphaColor80}
    }
    `;

    
    const light = {
        color:"#222",
        bgColor: "#DDD"
    }

    const dark = {
        bgColor:"#222",
        color: "#DDD"
    }


    const Box = styled.div`
    padding:1rem;
    margin:1rem;
    color:${({theme})=>theme.color};
    background-color:${({theme})=>theme.bgColor};
    animation:${fadeIn} 2s ease-out;
    `
    const BoxRounded = styled(Box)`
    border-radius:1rem;
    `;

    const GlobalStyle = createGlobalStyle`
    h2{
        padding:2rem;
        background-color:#fff;
        color:#61dafb;
        text-transform: uppercase;
    }
    `;

    return ( 
        <>
        <GlobalStyle />
        <h2>Styled Components</h2>
        <MyH3>Hola soy un h3 estilizado con Styled-Components</MyH3>
        <MyH3 color='#61dafb'>Hola soy un h3 estilizado con Styled-Components</MyH3>
        <MyH3 isButton>Soy un h3 estilizado como boton</MyH3>
        <ThemeProvider theme={light}>
          <BoxRounded>Soy una caja redondeada LIGHT</BoxRounded>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
          <Box>Soy una caja DARK</Box>
        </ThemeProvider>
        </>
     );
}

export default ComponentesEstilizados;