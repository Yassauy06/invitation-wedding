import styles from './styles/Header.module.css';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.heroTextColumn}>
          {/* ИМЕНА */}
         <motion.nav
  className={styles.navbar}
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
<motion.nav
  className={styles.navbar}
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
  <div className={styles.navLeft}>
    <span className={styles.logo}>💗</span>
    <span className={styles.coupleName}>Анна & Михаил</span>
  </div>

  <div className={styles.navRight}>
        <ScrollLink to="story" smooth={true} duration={600} offset={-80}>
      <span className={styles.navItem}>История</span>
    </ScrollLink>
    <ScrollLink to="program" smooth={true} duration={600} offset={-80}>
      <span className={styles.navItem}>Программа</span>
    </ScrollLink>
    <ScrollLink to="calendar" smooth={true} duration={600} offset={-80}>
      <span className={styles.navItem}>Календарь</span>
    </ScrollLink>
  </div>
</motion.nav>

  

</motion.nav>

         <motion.h1
            className={styles.name}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Анна
          </motion.h1>

          <motion.div
            className={styles.and}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            &
          </motion.div>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Михаил
          </motion.h1>

          {/* ПРИГЛАШЕНИЕ */}
          <motion.div
            className={styles.invite}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
         <motion.p
  animate={{ opacity: [1, 0.7, 1], scale: [1, 1.03, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'loop',
    delay: 0,
  }}
>
  Приглашаем вас разделить с нами
</motion.p>

<motion.p
  animate={{ opacity: [1, 0.7, 1], scale: [1, 1.03, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'loop',
    delay: 0.2,
  }}
>
  самый счастливый день нашей жизни
</motion.p>


            <div className={styles.eventInfo}>
              <motion.span
                animate={{ opacity: [1, 0.7, 1], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 0,
                }}
              >
                15 августа 2024
              </motion.span>

            

              <motion.span
                animate={{ opacity: [1, 0.7, 1], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 0.2,
                }}
              >
                15:00
              </motion.span>

             

              <motion.span
                animate={{ opacity: [1, 0.7, 1], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 0.4,
                }}
              >
                Астана
              </motion.span>
            </div>
          </motion.div>

          {/* КНОПКА */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <ScrollLink to="program" smooth={true} duration={600} offset={-80}>
              <button className={styles.button}>Узнать подробности</button>
            </ScrollLink>
          </motion.div>
        </div>
      </div>

     
    </header>
  );
};

export default Header;
