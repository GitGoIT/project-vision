import css from "./Samples.module.css";
import Container from "../../share/Container/Container";
import pcb from "../../images/samplesSection/pcb2x.png";
import pcbStack from "../../images/samplesSection/pcb-stack2x.png";
import body from "../../images/samplesSection/body2x.png";


const Samples = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Інженерні зразки</h2>
        <ul className={css.pcbList}>
          <li className={css.pcbItem}>
            <img className={css.pcbImage1} src={pcb} alt="pcb with chips" />
          </li>
          <li className={css.pcbItem}>
            <img className={css.pcbImage2} src={pcbStack} alt="pcb stack" />
          </li>
        </ul>
        <div className={css.imageWrapper}>
          <img className={css.bodyImage} src={body} alt="quadcopter body" />
        </div>
      </Container>
    </section>
  );
};

export default Samples;
