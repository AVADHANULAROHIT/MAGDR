import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>MAG MART</span>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};
export default Footer;