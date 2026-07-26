import { useMemo, useState } from 'react'
import LanguageContext from './languageContext.js'

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('বাংলা')

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
