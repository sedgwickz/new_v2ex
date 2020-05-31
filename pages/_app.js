import { GlobalStyles } from '../style/globalStyles'
import '../style/nprogess.css'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { initGA, logPageView } from '../googleAnalytics'
import Head from 'next/Head'

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
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="创意工作者的社区。讨论编程、设计、硬件、游戏等令人激动的话题。"
          ></meta>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>v2ex</title>
        </Head>
        <div className="wrapper">
          <nav className="header">
            <div className="logo">
              <Link href="/">
                <a>
                  V2EX
                  {/* <img src="https://v2ex.com/static/img/v2ex@2x.png" /> */}
                </a>
              </Link>
            </div>
            <div className="menu">
              <span className="theme">
                <label>
                  <input
                    onChange={(e) =>
                      e.target.checked
                        ? setTheme(blackTheme)
                        : setTheme(whiteTheme)
                    }
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
