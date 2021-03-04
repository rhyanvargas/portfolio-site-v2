import "../styles/globals.css"
import Layout from '../components/Layout'
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)
  const darkModeClass = darkMode ? 'dark' : ''
  
const handleThemeToggle = () => {
  setDarkMode(darkMode => !darkMode);
}

  return (
  <div className={`${darkModeClass}`}>
   <Layout darkMode={darkMode} handleThemeToggle={handleThemeToggle}>
     <Component {...pageProps} />
   </Layout> 
  </div>
  )
}

export default MyApp
