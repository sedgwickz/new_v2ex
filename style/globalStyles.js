import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: helvetica neue,luxi sans,dejavu sans,segoe ui,hiragino sans gb,microsoft yahei,sans-serif;
  line-height: 1.6;
  font-size: 14px;
  background-color: ${(props) =>
    props.theme === 'dark' ? 'black' : '#dedede'};
}

#wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

* {
  box-sizing: border-box;
}

a {
  color: #778087;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:visited {
  color: #afb9c1;
}

img {
  max-width: 100%;
  display: block;
}

.header {
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 1.1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
  padding: 0.5rem 1rem;
  background: #fff;
  .logo {
    flex-grow: 1;
    img {
      height: 30px;
    }
  }
  .menu {
    aligh-self: flex-end;
    a {
      color: black;
      margin-right: 1rem;
    }
  }
}

.container {
  max-width: 1000px;
  margin: 12px auto;
  flex: 1 1 auto;
}

.footer {
  padding: 2rem 1.1rem;
  background: white;
  text-align: center;
}

.card {
  background: white;
  padding: 0.8rem;
}

@media (max-width: 1024px) {
  .container {
    width: 80vw;
  }
}

@media (max-width: 640px) {
  .container {
    width: 100%;
  }
}

`
