import css from "./Modal.module.css";
import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from 'prop-types';
import ModalForm from "../ModalForm/ModalForm";

const modalRoot = document.querySelector("#modal-root");


const Modal = ({ children, closeModal }) => {
   
  const close = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", close);

    return () => document.removeEventListener("keydown", close);
  }, [close]);

  return createPortal(
    <div className={css.overlay} onClick={close}>
      <div className={css.modal}>
        <button className={css.btnClose} onClick={closeModal}>
          <AiOutlineClose className={css.closeIcon} />
        </button>
        <p className={css.title}>Форма зворотнього зв'язку</p>
        <ModalForm />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
