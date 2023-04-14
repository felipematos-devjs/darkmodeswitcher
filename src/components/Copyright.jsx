import { UseThemeContext } from "../providers/ThemeProvider"

//copyright. will go on the footer
export const Copyright = ({children}) =>{
    const {theme} = UseThemeContext(); 
    const cpTheme = 'copyright copyright-'+ theme;
    
    return(<article className={cpTheme}>
                {children}
            </article>
  )
}