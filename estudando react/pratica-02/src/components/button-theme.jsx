import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '@components/theme/themeContext'

const toggleTheme = () => {
 const context = useContext(ThemeContext)

return (
    <button onClick={context.toggleThemeMode}>
       Trocar tema!
    </button>
  )
}