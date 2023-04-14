import { useState } from "react"
import { UseThemeContext } from "../providers/ThemeProvider"
import { images } from "../assets/images"
import { UseModalContext } from "../providers/ModalProvider"


//the modal box
export const Modal = (props) =>{
    
    const {theme} = UseThemeContext()
    const {modalOpened, setModalOpened} = UseModalContext()
    const modalBoxClass = `modal-box modal-box-${theme}`
    const descriptionClassName = `modal-desc modal-desc-${theme}`
    const modalCloseBtn = theme == 'dark'? images.modal_close_dk : images.modal_close_lt
    
    if (modalOpened)
        return (<>
            <div className="modal-bg" onClick={()=>setModalOpened(false)}></div>
            <article className={modalBoxClass}>
                <div className="grid-row">
                    <div></div>
                    <h2>{props.title}</h2>
                    <input type='image' src={modalCloseBtn} onClick = {()=>setModalOpened(false)} className="modal-close-btn"/>
                </div>
                <img src={props.img} className='modal-img'/>
                <section className={descriptionClassName}>
                    {props.description}
                    {props.socials}
                </section>  
                
                
            </article>
        </>)
    else
    {return<></>}

}