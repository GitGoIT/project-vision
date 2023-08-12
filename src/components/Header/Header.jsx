import css from "./Header.module.css"
import Container from "../../share/Container/Container";
import logo from "../../images/logo2x.png";
import Modal from "../../share/Modal/Modal";
import useToggleModalHook from "../../share/Modal/toggleModalHook";

const Header = () => {

    const { isModalOpen, openModal, closeModal } = useToggleModalHook();

  return (
    <header className={css.section}>
      <Container>
        <div className={css.contentWrapper}>
          <img className={css.logo} src={logo} alt="logo" />
          <button className={css.btn} type="submit" onClick={openModal}>
            Pre - order
          </button>
        </div>
      </Container>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </header>
  );
};

export default Header;