import { UseModalContext } from "../providers/ModalProvider";
import { UseThemeContext } from "../providers/ThemeProvider"

//the footer
export const Footer = ({children}) =>{
    const {theme} = UseThemeContext()
    const {modalOpened} = UseModalContext()
    
    const className = `footer footer-${theme} ${modalOpened?`blur`:``}`;
    
    return (
        <footer className={className}>
            {children}
      </footer>
    )
}