import "../styles/globals.css"
import Layout from '../components/Layout'
import { useState, createContext } from "react";

export const UIThemeContext = createContext(null);

function MyApp({ Component, pageProps }) {

  
  const [darkModeDetails, setDarkModeDetails] = useState({isOn: false, darkClass: ''})
  const darkModeClass = darkModeDetails.isOn ? 'dark' : ''
  
const handleThemeToggle = () => {
  setDarkModeDetails(details =>  
  (
    {
      isOn: !details.isOn
    }
  ))
}

  return (
  <UIThemeContext.Provider value={{darkModeDetails,darkModeClass,handleThemeToggle}} >
    <Layout>
      <Component {...pageProps} />
    </Layout> 
  </UIThemeContext.Provider>
  )
}

export default MyApp
