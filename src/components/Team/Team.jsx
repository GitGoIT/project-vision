import css from "./Team.module.css";
import Container from "../../share/Container/Container";
import foto1 from "../../images/teamSection/foto1_2x.png";
import foto2 from "../../images/teamSection/foto2_2x.png";
import foto3 from "../../images/teamSection/foto3_2x.png";

const Team = () => {
  return (
    <section className={css.section}>
      <Container>
        {/* <div className={css.contentWrapper}> */}
        <h2 className={css.title}>Наша команда</h2>
        <ul className={css.teamList}>
          <li className={css.teamItem}>
            <div className={css.itemWrapper}>
              <div className={css.imageWrapper}>
                <img className={css.teamImage} src={foto1} alt="face" />
              </div>
              <div className={css.textWrapper}>
                <p className={css.teamName}>Віталій</p>
                <p className={css.teamPosition}>Embedded Engineer</p>
              </div>
            </div>
          </li>
          <li className={css.teamItem}>
            <div className={css.itemWrapper}>
              <div className={css.imageWrapper}>
                <img className={css.teamImage} src={foto2} alt="face" />
              </div>
              <div className={css.textWrapper}>
                <p className={css.teamName}>Володимир</p>
                <p className={css.teamPosition}>Embedded Engineer</p>
              </div>
            </div>
          </li>
          <li className={css.teamItem}>
            <div className={css.itemWrapper}>
              <div className={css.imageWrapper}>
                <img className={css.teamImage} src={foto3} alt="face" />
              </div>
              <div className={css.textWrapper}>
                <p className={css.teamName}>Максим</p>
                <p className={css.teamPosition}>Project Manager</p>
              </div>
            </div>
          </li>
        </ul>
        {/* </div> */}
      </Container>
    </section>
  );
};

export default Team;
