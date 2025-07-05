import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles/Program.module.css';

const fadeUpVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: delay,
    },
  },
});

const Program = () => {
  const refs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => {
      refs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, [visibleIndexes]);

  return (
    <section id="program" className={styles.section}>
      <h2 className={styles.title}>Программа дня</h2>

      <div className={styles.timelineContainer}>
        {/* Левая колонка */}
        <div className={styles.leftColumn}>
          <motion.div
            className={`${styles.event}`}
            ref={(el) => (refs.current[0] = el)}
            data-index={0}
            variants={fadeUpVariant(0.1)}
            initial="hidden"
            animate={visibleIndexes.includes(0) ? 'visible' : 'hidden'}
          >
            <div className={styles.time}>15:00</div>
            <div className={styles.eventContent}>
              <h3 className={styles.eventTitle}>Церемония бракосочетания</h3>
              <p className={styles.location}>ЗАГС Центрального района</p>
              <p className={styles.description}>Официальная регистрация брака</p>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.event} ${styles.banquet}`}
            ref={(el) => (refs.current[2] = el)}
            data-index={2}
            variants={fadeUpVariant(0.7)}
            initial="hidden"
            animate={visibleIndexes.includes(2) ? 'visible' : 'hidden'}
          >
            <div className={styles.time}>18:00</div>
            <div className={styles.eventContent}>
              <h3 className={styles.eventTitle}>Банкет</h3>
              <p className={styles.location}>Ресторан "Золотое кольцо"</p>
              <p className={styles.description}>Праздничный ужин и танцы до утра</p>
            </div>
          </motion.div>
        </div>

        <div className={styles.line}></div>

        {/* Правая колонка */}
        <div className={styles.rightColumn}>
          <motion.div
            className={`${styles.event} ${styles.photo}`}
            ref={(el) => (refs.current[1] = el)}
            data-index={1}
            variants={fadeUpVariant(0.4)}
            initial="hidden"
            animate={visibleIndexes.includes(1) ? 'visible' : 'hidden'}
          >
            <div className={styles.time}>16:00</div>
            <div className={styles.eventContent}>
              <h3 className={styles.eventTitle}>Фотосессия</h3>
              <p className={styles.location}>Парк Горького</p>
              <p className={styles.description}>Свадебная фотосессия в красивых локациях</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Program;
