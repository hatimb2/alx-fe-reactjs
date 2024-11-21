import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <ul 
        style={{
          listStyleType: 'none', 
          display: 'flex', 
          gap: '20px', 
          margin: 0,
          justifyContent: 'center'  
        }}
      >
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'color 0.3s ease-in-out'
};

export default Navbar