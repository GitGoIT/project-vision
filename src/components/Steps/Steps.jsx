import css from "./Steps.module.css";
import Container from "../../share/Container/Container";
import camera from "../../images/stepsSection/camera2x.png";

const Steps = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Наступні кроки</h2>
        <div className={css.contentWrapper}>
          <ul className={css.stepsList}>
            <li className={css.stepsItem}>
              <div className={css.itemWrapper}>
                <p>
                  Шукаємо інвестиції для пришвидшення розробок і створення
                  повноцінного R&D
                </p>
              </div>
            </li>
            <li className={css.stepsItem}>
              <div className={css.itemWrapper}>
                <p>Embedded інженерів які хочуть доєднатися до команди</p>
              </div>
            </li>
            <li className={css.stepsItem}>
              <div className={css.itemWrapper}>
                <p>Розробка власного польотного контролеру</p>
              </div>
            </li>
            <li className={css.stepsItem}>
              <div className={css.itemWrapper}>
                <p>Розробка Digital HD video link з шириною каналу 80МГц</p>
              </div>
            </li>
            <li className={css.stepsItem}>
              <div className={css.itemWrapper}>
                <p>Розробка камери з оптичним + цифровим зуммом</p>
              </div>
            </li>
            <li className={css.stepsItem}>
              <div className={css.itemWrapper}>
                <p>Перехід на CPU від Texas Instruments</p>
              </div>
            </li>
          </ul>
          <img className={css.cameraImage} src={camera} alt="camera on pcb" />
        </div>
      </Container>
    </section>
  );
};

export default Steps;
