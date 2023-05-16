import React from 'react'
import logo from '/public/assets/images/13763782_5349528-01.svg'

function Header() {
    return (

        <div className="container fixed-top">
            <div className="header">
                <div className="menu-toggle-btn">
                    <a href="#">
                        <i className="bi bi-list"></i>
                    </a>
                </div>

                <div className="page-title"><img src={logo} width="160" /></div>

             
                <div className="header-mobile-buttons">
                    <a href="#" className="search-bar-btn">
                        <i className="bi bi-search"></i>
                    </a>
                    <a href="#" className="actions-btn">
                        <i className="bi bi-three-dots"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Header
