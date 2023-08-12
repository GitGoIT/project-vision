import css from "./Solution.module.css";
import Container from "../../share/Container/Container";
import drone from "../../images/solutionSection/drone2x.png";
import dualCamera from "../../images/solutionSection/dual-camera2x.png";
import pcb1 from "../../images/solutionSection/pcb1_2x.png";
import pcb2 from "../../images/solutionSection/pcb2_2x.png";
import pcb3 from "../../images/solutionSection/pcb3_2x.png";

const Solution = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>Наше рішення</h2>
      </Container>
      <div className={css.contentWrapper}>
        <Container>
          <h3 className={css.subTitle}>Вимоги</h3>
          <ul className={css.requirementsList}>
            <li className={css.solutionItem}>
              <p>Дешевизна</p>
            </li>
            <li className={css.solutionItem}>
              <p>Автонаведення за допомогою AI</p>
            </li>
            <li className={css.solutionItem}>
              <p>Доступні компоненти</p>
            </li>
            <li className={css.solutionItem}>
              <p>Маленький розмір</p>
            </li>
            <li className={css.solutionItem}>
              <p>Встановлення в будь яку FPV раму</p>
            </li>
            <li className={css.solutionItem}>
              <p>Інтеграція з польотним контролером</p>
            </li>
            <li className={css.solutionItem}>
              <p>Легкість вибору цілі для враження</p>
            </li>
          </ul>
          <h3 className={css.subTitle}>Компоненти</h3>
          <ul className={css.componentsList}>
            <li className={css.solutionItem}>
              <p>Компактний Edge-пристрій з NPU ядром</p>
            </li>
            <li className={css.solutionItem}>
              <p>ML-модель для виявлення ворожих об'єктів</p>
            </li>
            <li className={css.solutionItem}>
              <p>Маленька FPV камера</p>
            </li>
          </ul>
          <div className={css.planWrapper}>
            <h3 className={css.planTitle}>Наш план</h3>
            <ul className={css.planList}>
              <li className={css.planItem}>
                <p>Розробка hardware модуля</p>
              </li>
              <li className={css.planItem}>
                <p>Навчання нейронної мережі</p>
              </li>
              <li className={css.planItem}>
                <p>Розробка камери</p>
              </li>
              <li className={css.planItem}>
                <p>Розробка алгоритму наведення</p>
              </li>
              <li className={css.planItem}>
                <p>Інтеграція з польотним контролером</p>
              </li>
              <li className={css.planItem}>
                <p>Альфа тестування</p>
              </li>
              <li className={css.planItem}>
                <p>Захищений цифровий відео-стрім (Bandwidth 80МГц)</p>
              </li>
              <li className={css.planItem}>
                <p>Підготовка до масового виробництва</p>
              </li>
              <li className={css.planItem}>
                <p>Бета тестування</p>
              </li>
            </ul>
            <img className={css.planImage} src={drone} alt="quadcopter" />
          </div>
          <div className={css.advantagesWrepper}>
            <ul className={css.advantagesList}>
              <li className={css.advantagesItem}>
                <p>Компактний розмір 36х36мм, кріплення 30х30мм</p>
              </li>
              <li className={css.advantagesItem}>
                <p>FVP камера 19х19мм</p>
              </li>
              <li className={css.advantagesItem}>
                <p>Інтеграція з ПО BetaFlight та iNav</p>
              </li>
            </ul>
            <img
              className={css.advantagesImage}
              src={dualCamera}
              alt="camera on pcb"
            />
          </div>
          <ul className={css.pcbList}>
            <li className={css.pcbItem}>
              <img className={css.pcbImage1} src={pcb1} alt="pcb with chips" />
            </li>
            <li className={css.pcbItem}>
              <img className={css.pcbImage2} src={pcb2} alt="pcb with chips" />
            </li>
            <li className={css.pcbItem}>
              <img className={css.pcbImage3} src={pcb3} alt="pcb with size" />
            </li>
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default Solution;
