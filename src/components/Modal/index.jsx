import { createContext, useContext, useEffect, useRef, useState } from 'react'
import CloseIcon from "@mui/icons-material/Close";
import './style.css'
const modalContaxt = createContext(null);

export const Modal = ({isOpen,children,onClose}) => {
    const {setModal} = useContext(modalContaxt);
    useEffect(() => {
        if(isOpen) {
            setModal({ children,onClose })
        } else setModal(null);
    },[isOpen])
    // return <></>
}

export const ModalWrapper  = ({children}) => {
    const [modal,setModal] = useState(null);
    useEffect(() => {
        if(modal) {
            window.scrollTo(0,0);
        }
    },[modal])
    return <modalContaxt.Provider value={{modal,setModal}}>
        { modal ? <div  id="modal" className='modal-container' onClick={modal.onClose}>
            <div className='modal' onClick={(event) => event.stopPropagation( )}>
                <div className='btn-container'>
                    <CloseIcon onClick={modal.onClose}/>
                </div>
                {modal.children}
            </div>
        </div> : null}
        {children}
    </modalContaxt.Provider>
}