import React from 'react';
import Link from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <h1>Message-System</h1>
            <Link 
               to="/register">
              Cadastro
            </Link>

            <Link 
               to="/message">
              Mensagem
            </Link>
        </div>
    )
}

export default Header;