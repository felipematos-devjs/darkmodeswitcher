import { UseThemeContext } from "../providers/ThemeProvider"

//dark mode toggle button!
export const DarkModeToggle = () =>{
    const {theme, setTheme} = UseThemeContext()

    const textClassName = 'text-'+ theme;

    return (<>
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
            <input 
                id="checkbox"
                type="checkbox" 
                defaultChecked = {theme == 'dark'}
                onChange = {(e) =>{
                    setTheme(e.target.checked ? 'dark' : 'light')
                    console.log(theme)
                }}
                />
                <div className="slider round"></div>
        </label>
        <label htmlFor="checkbox"><em className={textClassName}>Enable Dark Mode!</em></label>
        </div>   
    </>)
}