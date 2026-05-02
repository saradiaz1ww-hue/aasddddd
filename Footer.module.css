import { FunctionComponent, useCallback } from "react";
import Button from "./ButtonEncontrarpieza";
import styles from "./ContainerEncontrarpieza.module.css";

export type ContainerType = {
  className?: string;
};

const ContainerEncontrarpieza: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const onButtonClick = useCallback((option: string) => {
    console.log("Seleccionado:", option);
  }, []);

  const onPrevious = useCallback(() => {
    console.log("Anterior");
  }, []);

  const onNext = useCallback(() => {
    console.log("Siguiente");
  }, []);

  return (
    <div className={[styles.containerEncontrarpieza, className].join(" ")}>
      <section className={styles.hero}>
        <button className={styles.badge} type="button">
          <img className={styles.badgeIcon} alt="" src="/Icon9.svg" />
          Búsqueda Guiada
        </button>
        <h1 className={styles.title}>Encuentra tu pieza perfecta</h1>
        <p className={styles.description}>
          Responde unas preguntas y te ayudaremos a encontrar exactamente lo que necesitas
        </p>
      </section>

      <section className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <span className={styles.stepLabel}>Paso 1 de 4</span>
          <span className={styles.progressText}>25%</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} />
        </div>
        <div className={styles.stepIndicators}>
          <button className={[styles.stepCircle, styles.stepActive].join(" ")} type="button">
            1
          </button>
          <button className={styles.stepCircle} type="button">
            2
          </button>
          <button className={styles.stepCircle} type="button">
            3
          </button>
          <button className={styles.stepCircle} type="button">
            4
          </button>
        </div>
      </section>

      <section className={styles.questionCard}>
        <div className={styles.questionHeader}>
          <h2>¿Qué tipo de pieza necesitas?</h2>
        </div>
        <div className={styles.optionsGrid}>
          <Button
            onButtonClick={() => onButtonClick("Bisagra")}
            title="Bisagra"
            description="Elementos de articulación"
          />
          <Button
            onButtonClick={() => onButtonClick("Buje")}
            title="Buje"
            description="Componentes de rodamiento"
          />
          <Button
            onButtonClick={() => onButtonClick("Soporte")}
            title="Soporte"
            description="Elementos de sujeción"
          />
          <Button
            onButtonClick={() => onButtonClick("Lengüeta")}
            title="Lengüeta"
            description="Componentes de cierre"
          />
        </div>
      </section>

      <div className={styles.footerActions}>
        <button className={styles.prevButton} type="button" onClick={onPrevious}>
          Anterior
        </button>
        <button className={styles.nextButton} type="button" onClick={onNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ContainerEncontrarpieza;
