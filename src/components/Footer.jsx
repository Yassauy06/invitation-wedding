import styles from './styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Анна & Михаил. Приглашаем вас разделить с нами наш счастливый момент.</p>
    </footer>
  );
};

export default Footer;
