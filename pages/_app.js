import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>Header</div>
      <Component {...pageProps} />
      <div>Footer</div>
    </>
  )
}
