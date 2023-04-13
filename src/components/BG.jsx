import { UseThemeContext } from "../providers/GlobalProvider"
import { images } from "../assets/images";

//the background from the SVG images
export const BG = () =>{
    const {theme} = UseThemeContext()
    const BGClassName = 'BG BG-'+ theme;

    const bg_style = (theme == 'dark')? 
    {backgroundImage: `url(${images.bg_dk})`}: 
    {backgroundImage: `url(${images.bg_lt})`}

    return <div className={BGClassName} style={bg_style}></div>
}