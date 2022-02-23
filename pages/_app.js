// Imports
import "../styles/globals.scss"

// Adding "Globals" CSS (Can Only Within This '_app.js')
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}/>
}