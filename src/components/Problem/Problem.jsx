import css from "./Problem.module.css";
import Container from "../../share/Container/Container";
import problem1 from "../../images/problemSection/problem1_2x.png"
import problem2 from "../../images/problemSection/problem2_2x.png";

const Problem = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Проблема</h2>
        <div className={css.problemsWrapper}>
          <ul className={css.problemsList}>
            <li className={css.problemItem}>
              <p>
                Складність влучити в ціль FPV дроном-камікадзе на великій
                відстані
              </p>
            </li>
            <li className={css.problemItem}>
              <p>
                Керування FPV дроном потребує високого рівня майстерності та
                підготовки
              </p>
            </li>
            <li className={css.problemItem}>
              <p>Нестабільний відеолінк при зниженні дрона менше ніж 30-40м</p>
            </li>
            <li className={css.problemItem}>
              <p>Відсутність будь яких помічників пілоту</p>
            </li>
          </ul>
        </div>
        <ul className={css.imagesList}>
          <li>
            <img className={css.image} src={problem1} alt="view to the road" />
          </li>
          <li>
            <img className={css.image} src={problem2} alt="view to the field" />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Problem;
