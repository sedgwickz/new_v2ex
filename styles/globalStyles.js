import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: helvetica neue,luxi sans,dejavu sans,segoe ui,hiragino sans gb,microsoft yahei,sans-serif;
  line-height: 1.6;
  font-size: 14px;
  color: ${({ theme }) => theme.color};
  background-color:  ${({ theme }) => theme.bgColor}; 
  transition: all 0.5s ease-out;
}

.wrapper {
  min-height: 100vh;
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
  font-size: 1.1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
  padding: 0.5rem 2rem;
  background-color:  ${({ theme }) => theme.navBgColor};
  .logo {
    flex: 1 1 auto;
    display: flex;
    font-size: 1.6rem;
    font-weight: 800;
    a { 
      text-decoration: none;
      color:${({ theme }) => theme.logoColor};
    }
  }
  .menu {
    a {
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
  padding: 4rem 1.1rem;
  background-color: ${({ theme }) => theme.navBgColor};
  text-align: center;
  .info {
    display:flex;
    justify-content: center;
    iframe {
      margin: 0 1rem;
    }
  }
}

.card {
  background-color: ${({ theme }) => theme.cardBgColor}; 
  padding: 0.8rem;
}

@media (max-width: 768px) {
  .container {
    width: auto;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 80vw;
  }
}

@media (min-width: 1024px) {
  .container {
    width: 1024px;
  }
}


.theme {
  font-size: 0.8rem;
  margin: 0 1rem;
  color:#778087; 
}

`
