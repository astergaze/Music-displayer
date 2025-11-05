import "./css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <p><strong>Escuela Técnica N°26 "Confederacion Suiza"</strong></p>
          <p>Proyecto de Generación Musical con IA</p>
        </div>
        <div className="footer-credits">
          <p>Página creada por:</p>
          <ul>
            <li>Thiago Martinez</li>
            <li>Lautaro Fortuna</li>
            <li>Benjamin Gonzalez</li>
            <li>Joel Ninaja</li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;