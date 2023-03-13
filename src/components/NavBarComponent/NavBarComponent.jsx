import React from 'react';
import logo from '../../images/logo.png';
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent';


export const NavBarComponent = () => {

  const styles = {
    width : '40px',

  }


  return (
    
    
    <header className="p-3 text-bg-dark">
    <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"></a>
    <a href=""><img style={styles} src={logo} alt="" /></a>

   
    
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
    <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
    <li><a href="#" className="nav-link px-2 text-white">Servicios</a></li>
    <li><a href="#" className="nav-link px-2 text-white">E-ticket</a></li>
    <li><a href="#" className="nav-link px-2 text-white">Abonos</a></li>
    <li><a href="#" className="nav-link px-2 text-white">Nosotros</a></li>
    </ul>
    
   

    
    <div className="text-end">
    
    <CartWidgetComponent/>
    </div>
    </div>
    </div>
    </header>
    
    
    
    )
  }
