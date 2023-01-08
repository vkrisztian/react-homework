import styles from './Modal.module.css';
import React from 'react';

export const ModalContext = React.createContext({show: false, onClose: () => {}});

const Modal = (props) => {

    const renderModal = (onClose) => {
        return (
            <div className={styles.modal}>
                <div className={styles.closeBtnContainer}>
                    <span className={styles.closeBtn} onClick={onClose}>X</span>
                </div>
                <div className={styles.contentContainer}>
                    {props.children}
                </div>
            </div>
        );
    }

    return (
        <ModalContext.Consumer>
            {
                ({show, onClose}) => show ? 
                renderModal(onClose) : 
                null
            }
        </ModalContext.Consumer>
    )
}



export default Modal;