import { GlobalStyles } from '../styles/globalStyles'
import '../styles/nprogess.css'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import ReactGA from 'react-ga'
import Head from 'next/head'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

const blackTheme = {
  logoColor: '#eee',
  color: '#eee',
  bgColor: '#000',
  cardBgColor: '#000',
  navBgColor: '#1c1e21',
  tagBgColor: '#1c1e21',
  countBgColor: '#1c1e21',
  tabBgColor: '#1c1e21',
}

const whiteTheme = {
  logoColor: '#000',
  color: '#444',
  bgColor: '#dedede',
  cardBgColor: '#fff',
  navBgColor: '#fff',
  tagBgColor: '#f5f5f5',
  countBgColor: '#aab0c6',
  tabBgColor: '#334',
}

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(blackTheme)

  useEffect(() => {
    setTheme(
      localStorage.getItem('theme') === 'white' ? whiteTheme : blackTheme,
    )
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize('UA-168042043-1')
      window.GA_INITIALIZED = true
    }
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }, [])

  function changeThemeHandler(e) {
    if (e.target.checked) {
      setTheme(blackTheme)
      localStorage.setItem('theme', 'black')
    } else {
      setTheme(whiteTheme)
      localStorage.setItem('theme', 'white')
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Head>
          <title>v2ex</title>
        </Head>
        <div className="wrapper">
          <nav className="header">
            <div className="logo">
              <Link href="/">
                <a>V2EX</a>
              </Link>
            </div>
            <div className="menu">
              <span className="theme">
                <label>
                  <input
                    onChange={changeThemeHandler}
                    type="checkbox"
                    checked={theme === blackTheme ? 'checked' : ''}
                  ></input>
                  暗黑模式
                </label>
              </span>
              <Link href="/">
                <a>首页</a>
              </Link>
              <Link href="/login">
                <a>登录</a>
              </Link>
              <Link href="/register">
                <a>注册</a>
              </Link>
            </div>
          </nav>
          <main className="container">
            <Component {...pageProps} />
          </main>
          <footer className="footer">
            <div className="badge">
              <img
                alt="Uptime Robot status"
                src="https://img.shields.io/uptimerobot/status/m785148416-b517af164156db5e07cde62d?label=%E6%BA%90v2ex"
              />
              <img
                alt="Uptime Robot status"
                src="https://img.shields.io/uptimerobot/status/m785147913-d58edfa2bd5be6d6125857ed?label=%E6%9C%AC%E7%AB%99"
              />
            </div>
            <div className="info">
              本项目为开源项目
              <iframe
                src="https://ghbtns.com/github-btn.html?user=sedgwickz&repo=new_v2ex&type=star&count=true&v=2"
                frameBorder="0"
                scrolling="0"
                width="150"
                height="20"
                title="GitHub"
              ></iframe>
            </div>
            <br />
            如果对你有帮助，请给一个star⭐️，Thank you！😊
          </footer>
        </div>
      </ThemeProvider>
    </>
  )
}
