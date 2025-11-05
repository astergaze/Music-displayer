import "./css/Footer.css";
import Logo from "./assets/SchoolLogo.svg"
import ghIcon from "./assets/github-logo.svg"
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <img src={Logo} alt="Logo ET26"/>
          <p><strong>Escuela Técnica N°26 "Confederacion Suiza"</strong></p>
          <p>Proyecto de Generación Musical con IA</p>
        </div>
        <div className="footer-credits">
          <p>Página creada por:</p>
          <ul>
            <li>Thiago Martinez   <a href="https://github.com/astergaze" target="blank"><img src={ghIcon} alt="" /></a></li>
            <li>Lautaro Fortuna   <a href="https://github.com/lautaroif08" target="blank"><img src={ghIcon} alt="" /></a></li>
            <li>Benjamin Gonzalez <a href="https://github.com/benjamin091218" target="blank"><img src={ghIcon} alt="" /></a></li>
            <li>Joel Ninaja       <a href="https://github.com/Shower143" target="blank"><img src={ghIcon} alt="" /></a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;