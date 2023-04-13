import { UseThemeContext } from "../providers/GlobalProvider"
import { DarkModeToggle } from "./DarkModeToggle"

//central box containing the darkmode toggle
export const ModeSwitcherBox = () =>{
    
    const {theme} = UseThemeContext()
    
    const textClassName = 'text-'+ theme;
    const dividerClassName = 'divider divider-'+ theme;
    const boxClassName = 'box box-'+ theme;

    return(
    <div className={boxClassName}>
        <div>
            <h1 className={textClassName}>Dark Mode Switcher</h1>
            <p className={textClassName}>This is a simple dark mode switcher to practice react hooks!</p>
        </div>
        <div className={dividerClassName}></div>
        <div><DarkModeToggle /></div>
    </div>
    )  
}