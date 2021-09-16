import { React } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <div className="container_header">
        <h1>Message-System</h1>
        <Link 
          className="Link" 
          to="/">
          Dashborad
        </Link>

        <Link 
          className="Link" 
          to="/message">
          Mensagem
        </Link>
      </div>
    );
}

export default Header;