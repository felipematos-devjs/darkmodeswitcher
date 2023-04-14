import { UseThemeContext } from "../providers/ThemeProvider"

//cards containing the programming stacks
export const StackCard = (props) =>{
    const {theme} = UseThemeContext()

    const stackCardName = 'card card-' + theme;
    const textClassName = 'text-'+ theme;

    return (<div className={stackCardName}>
                <img src={props.logo} alt={props.name + ' logo'} />
                <p className={textClassName}>{props.name}</p>
            </div>
    )
}