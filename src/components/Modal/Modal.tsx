import { useRef } from "react";

interface ModalProps {
    children?: JSX.Element,
    customClass?: string,
    modalClass?: string,
    title: string,
    name: string | JSX.Element,
    customButton?: JSX.Element,
    customButton2?: JSX.Element,
    close?: boolean
}

function Modal({ children, customClass, modalClass, title, name, customButton, customButton2, close }: ModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        modalRef.current?.showModal();
    };
    const handleClick = () => {
        modalRef.current?.close()
    }
   
    
    return (
        <>
            <button className={`btn ${customClass}   normal-case `}
                onClick={openModal}
            >{name}</button>
            <dialog id="my_modal_5" className="modal" ref={modalRef}>
                <form method="dialog" className={`modal-box ${modalClass}`}>
                    <h3 className={`font-bold p-2 ${modalClass ? "text-2xl" : "text-lg"}`}>{title}</h3>
                    {children}
                    <div className="modal-action">
                        {close ? ("") : (<button className="btn" onClick={handleClick}>Close</button>)}
                        {customButton}
                        {customButton2}
                    </div>
                </form>
            </dialog >
        </>
    )
}

export default Modal