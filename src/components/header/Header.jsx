import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [oscuro, setOscuro] = useState(false);

  const alternarTema = () => {
    setOscuro(!oscuro);
    document.body.classList.toggle("tema-oscuro");
  };

  return (
    <header className="header1">
      <Link to="/"><span className="header1-title">TP BLOB</span></Link>
      <nav className="header1-nav">
        <Link to="/">Inicio</Link>
        <Link to="/blob">Blob</Link>
        <Link to="/acerca-de">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <div className="header1-actions">
        <button
          className="header1-tema"
          type="button"
          onClick={alternarTema}
        >
          {oscuro ? "Modo claro" : "Modo oscuro"}
        </button>
        <button
          className="header1-close"
          type="button"
          aria-label="Cerrar"
          onClick={() => alert("Saliendo")}
        >
          X
        </button>
      </div>
    </header>
  );
}
export default Header;
