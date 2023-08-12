import css from "./Footer.module.css";
import Container from "../../share/Container/Container";
import logo from "../../images/logo2x.png";

const Footer = () => {
  return (
    <footer className={css.section}>
      <Container>
        <div className={css.container}>
          <div className={css.contentWrapper}>
            <a
              href="https://www.linkedin.com/in/maksym-rybalko-187712114/"
              className={css.link}
              target="_blank"
              rel="noreferrer"
            >
              Maksym Rybalko | LinkedIn
            </a>
            <div className={css.logoWrapper}>
              <img className={css.logo} src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <p className={css.copyright}>
          &#169; 2023 | Developed by&nbsp;
          <a
            href="https://www.linkedin.com/in/ivan-alimenko/"
            className={css.copyrightLink}
            target="_blank"
            rel="noreferrer"
          >
            Ivan Alimenko
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
