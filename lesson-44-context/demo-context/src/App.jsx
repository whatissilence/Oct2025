import './App.css'
import { useState } from 'react';
import Main from './components/Main.jsx';
import ThemeContext from './contexts/ThemeContext.jsx';
import LangContext from './contexts/LangContext.jsx';

function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const handleToggleLang = () => {
    setLang(lang === 'en' ? 'ua' : 'en');
  }

  return (
    <div className={`application ${theme}`}>
      <button onClick={handleToggleTheme} type="button">
        {lang === 'en' ? 'Change theme' : 'Змінити тему'}
      </button>
      <button onClick={handleToggleLang} type="button">
        {lang === 'en' ? 'Change language' : 'Змінити мову'}
      </button>
      <div>
        {theme} - {lang}
      </div>

      <ThemeContext.Provider value={theme}>
        <LangContext.Provider value={lang}>
          <Main />
        </LangContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
