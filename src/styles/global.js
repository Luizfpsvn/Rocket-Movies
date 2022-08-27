import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  outline: none;
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: all 0.4s;
}

button:hover, a:hover {
  filter: brightness(0.8);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.PINK};
}
`;
