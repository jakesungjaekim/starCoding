import React, { useState } from 'react'
import Page from './components/Page' 
import './AppUseContext.css'
import { ThemeContext } from './components/context/ThemeContext'
import { UserContext } from './components/context/UserContext'

const AppUseContext = () => {
    const [isDark, setIsDark] = useState(false)

  return (
    <div>
        <UserContext.Provider value={"USER"}>
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page />
        </ThemeContext.Provider>
        </UserContext.Provider>
    </div>
  )
}

export default AppUseContext 