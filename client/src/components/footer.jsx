import React from 'react';

const Footer = (props) => {
    return (
      <div className="navbar navbar-fixed-bottom footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <p>© {new Date().getFullYear()} | Annah Patterson | Queenie Smith | Michael Shin | Yufan Wang |</p>
            </div>
            <div className="col-sm-4 footer-right">
              <a href="https://github.com/UrbanTails/UrbanTails">Github Repository</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;