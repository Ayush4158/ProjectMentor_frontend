import { useEffect } from 'react'
import { IoSunny } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";


type ThemeType = {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}
const ThemeToggleBtn: React.FC<ThemeType> = ({theme, setTheme}) => {
  
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(`(prefers-color-scheme: dark)`).matches
    
    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    // run only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])
  
  return (
    <button aria-label="Toggle theme" type="button" className='p-2 rounded-full bg-btn-light dark:bg-btn-dark hover:shadow-lg shadow-black/15 dark:shadow-white/15'>
      {theme === 'dark'? (
        <IoSunny className='text-white' onClick={() => setTheme('light')} size={25} />
      ): 
      (
        <IoMoonSharp onClick={() => setTheme('dark')} size={25} />
      )}
      
    </button>
  )
}

export default ThemeToggleBtn
