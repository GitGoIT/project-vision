import css from "./Contacts.module.css";
import Container from "../../share/Container/Container";

const Contacts = () => {

  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Контакти</h2>
        <div className={css.contentWrapper}>
          <div className={css.blockWrapper}>
            <div className={css.linkWrapper}>
              <a href="mailto:vitaliy.nimych@gmail.com" className={css.email}>
                vitaliy.nimych@gmail.com
              </a>
              <a href="mailto:m.rybalko88@gmail.com" className={css.email}>
                m.rybalko88@gmail.com
              </a>
            </div>
            <div className={css.linkWrapper}>
              <a href="tel:+380635846174" className={css.phone}>
                +380635846174
              </a>
              <a href="tel:+380504117856" className={css.phone}>
                +380504117856
              </a>
            </div>
            <p className={css.messages}>Signal, Telegram</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
