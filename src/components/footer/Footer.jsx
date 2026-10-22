import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<footer className="footer">
			<nav className="footer-nav">
				<Link to="/acerca-de">Acerca de</Link>
				<Link to="/contacto">Contacto</Link>
			</nav>
			<p>Copyright 2026</p>
			<p className="p1">Made by Jb_</p>
		</footer>
	);
}

export default Footer;
