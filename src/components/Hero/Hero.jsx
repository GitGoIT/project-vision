import css from "./Hero.module.css";


const Hero = () => {

  return (
    <section className={css.section}>
      <div className={css.titleWrapper}>
        <div className={css.dronWrapper}></div>
        <h1 className={css.title}>
          {/* MILITARY OBJECTS <span className={css.titleSpan}>DETECTION</span> */}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
