import React from 'react';
import Logo from '../assets/TVmaze.png';

function Header() {
  return (
    <>
      <section className='navbar navbar-expand-lg header'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-12">
              <a href="/" className='navbar-brand wrapper'>
                <img className='logo' src={Logo} alt="logo" />
                <h1 className='heading'>TVmaze</h1>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header;