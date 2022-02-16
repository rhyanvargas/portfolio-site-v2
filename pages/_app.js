import "../styles/globals.css"
import Layout from '../components/Layout'
import { useState, createContext } from "react";
import { DefaultSeo } from 'next-seo';

export const UIThemeContext = createContext(null);

function MyApp({ Component, pageProps }) {

  const [darkModeDetails, setDarkModeDetails] = useState({ isOn: false })
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
    <>
      <DefaultSeo
        description="More than just a Front End Developer. My experience extends to Project Management, UX/UI design, and Marketing Automation. I am currently using React, Javascript, REST/GraphQL APIs and SQL"
      />
      <UIThemeContext.Provider value={{ darkModeDetails, darkModeClass, handleThemeToggle }} >
        <Layout className='${darkModeClass}'>
          <Component {...pageProps} />
        </Layout>
      </UIThemeContext.Provider>
    </>
  )
}

export default MyApp
