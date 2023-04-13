import { UseThemeContext } from "../providers/GlobalProvider"

//the footer
export const Footer = ({children}) =>{
    const {theme} = UseThemeContext()
    
    const className = 'footer footer-'+ theme;
    
    return (
        <footer className={className}>
            {children}
      </footer>
    )
}