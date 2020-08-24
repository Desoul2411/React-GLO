
import React from 'react';

const Header = ({phone})  => (
        <header>
          <div className="wrapper">
            <div className="header">
              <a href="#"><div className="header-logo"></div></a>
              <a href="tel:888" className="header-phone"></a>
              <div className="header-phonelink"><a href={phone}>{phone}</a></div>
            </div>
          </div>
        </header>
    );

  export default Header;