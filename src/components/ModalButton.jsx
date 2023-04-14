import { UseModalContext } from "../providers/ModalProvider"
import { UseThemeContext } from "../providers/ThemeProvider"
import { images } from "../assets/images"

export const ModalButton = () =>{

    const {theme} = UseThemeContext()
    const {setModalOpened} = UseModalContext()

    const modalOpenBtnName = `modal-btn`
    const modalBtnSrc = theme == 'dark'? images.about_dk : images.about_lt

    return (<>
        <input type="image" src ={modalBtnSrc} onClick={()=>setModalOpened(true)} className={modalOpenBtnName}/>
    </>)
}