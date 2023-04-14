import { UseThemeContext } from "../providers/ThemeProvider"
import { images } from "../assets/images";
import { UseModalContext } from "../providers/ModalProvider";

//the background from the SVG images
export const BG = () =>{
    const {theme} = UseThemeContext()
    const {modalOpened} = UseModalContext()
    const BGClassName = `BG BG-${theme} ${modalOpened?`blur`:``}`;

    const bg_style = (theme == 'dark')? 
    {backgroundImage: `url(${images.bg_dk})`}: 
    {backgroundImage: `url(${images.bg_lt})`}

    return <div className={BGClassName} style={bg_style}></div>
}