import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer" itemScope itemType="http://schema.org/WPFooter">
      <meta itemProp="copyrightYear" content="2023" />
      <meta itemProp="copyrightHolder" content="Volodymyr Kavun" />
      <small className="footer__text">
        Copyright &copy; 2023 Volodymyr Kavun
      </small>
    </footer>
  );
};

export default Footer;
