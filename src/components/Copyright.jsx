import { UseThemeContext } from "../providers/GlobalProvider"

//copyright. will go on the footer
export const Copyright = () =>{
    const {theme} = UseThemeContext(); 
    const cpTheme = 'copyright copyright-'+ theme;
    
    return(<article className={cpTheme}>
                <h2>Made by</h2>
                <h2>Felipe Matos</h2>
                <p>(in his free time!)</p>
            </article>
  )
}