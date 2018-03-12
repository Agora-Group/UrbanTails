import React from 'react';

/*
  Footer Component:
  Used on landing page, login page, and signup page
*/

const Footer = (props) => {
    return (
      <div className="navbar navbar-fixed-bottom footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <p>© {new Date().getFullYear()} | Kyle McLeod | Habib Qureshi | Brandon Little |</p>
            </div>
            <div className="col-sm-4 footer-right">
              <a href="https://github.com/Agora-Group/UrbanTails">Github Repository</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;