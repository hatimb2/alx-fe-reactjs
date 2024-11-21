import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
        <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff' }}>About</Link></li>
        <li><Link to="/services" style={{ color: '#fff' }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: '#fff' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


