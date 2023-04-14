import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
 --purple-300: #B94D42;
 --purple-600: #620000;
 --purple-900: #2500EE;
 
 --font-black: #1c1c1c;
 --font-white: #ffffff;
}

* {
 margin:0;
 padding: 0;
 box-sizing: border-box;
}

html {
 @media (max-width: 1080px) {
  font-size: 93.75%; //15 pixels
 }

 @media (max-width: 720px) {
  font-size: 87.5%; // 14 pixels
 }

}

h1 {
 color: var(--purple-600);
 font-family: 'Roboto';
}
`