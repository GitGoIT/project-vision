import css from "./Feedback.module.css";
import Container from "../../share/Container/Container";
import Modal from "../../share/Modal/Modal";
import  useToggleModalHook  from "../../share/Modal/toggleModalHook";

const Feedback = () => {
  
  const { isModalOpen, openModal, closeModal } = useToggleModalHook();

  return (
    <section className={css.section}>
      <Container>
        <div className={css.blockWrapper}>
          <div className={css.contentWrapper}>
            <p className={css.text}>
              Pre-order модуля автонаведення, наша команда зв'яжеться з вами.
            </p>
            <button className={css.btn} type="submit" onClick={openModal}>
              Request
            </button>
          </div>
        </div>
      </Container>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </section>
  );
};

export default Feedback;
