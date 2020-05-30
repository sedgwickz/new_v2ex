import { GlobalStyles } from '../style/globalStyles'
import '../style/nprogess.css'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles theme="white" />
      <div id="wrapper">
        <nav className="header">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="https://v2ex.com/static/img/v2ex@2x.png" />
              </a>
            </Link>
          </div>
          <div className="menu">
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
        <footer className="footer">Footer</footer>
      </div>
    </>
  )
}
