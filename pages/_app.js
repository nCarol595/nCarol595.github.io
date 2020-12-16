
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
// This default export is required in a new `pages/_app.js` file.
//export default function MyApp({ Component, pageProps }) {
//  return <Component {...pageProps} />
//}