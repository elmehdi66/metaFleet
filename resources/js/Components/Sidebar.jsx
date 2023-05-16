import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , usePage} from '@inertiajs/react';

function Sidebar() {
    const { url } = usePage();
    const [activeLink, setActiveLink] = useState(url);
    console.log(url)
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };

    return (
      <>
        <div className="menu">
          <div className="menu-body mt-5 pt-5">
            <ul>
              <li>
                <Link
                  className={activeLink === '/meta-dash-fleet' ? 'active' : ''}
                  href={route('dashboard')}
                  onClick={() => handleLinkClick(route('dashboard'))}
                >
                  <span className="nav-link-icon">
                    <i className="bi bi-bar-chart"></i>
                  </span>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="menu-divider">Gestion</li>
              <li>
                <Link
                  className={activeLink === '/roads' ? 'active' : ''}
                  href={route('itineraires')}
                  onClick={() => handleLinkClick(route('itineraires'))}
                >
                  <span className="nav-link-icon">
                    <i className="bi bi-receipt"></i>
                  </span>
                  <span>Itinéraires</span>
                </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-truck"></i>
                                </span>
                                <span>Véhicules</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-wallet2"></i>
                                </span>
                                <span>Gasoil</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="buyer-dashboard.html">Dashboard</a>
                                </li>
                                <li>
                                    <a href="buyer-orders.html">Orders</a>
                                </li>
                                <li>
                                    <a href="buyer-addresses.html">Addresses</a>
                                </li>
                                <li>
                                    <a href="buyer-wishlist.html">Wishlist</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="customers.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-person-badge"></i>
                                </span>
                                <span>Affectations</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-receipt"></i>
                                </span>
                                <span>Rapports</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="invoices.html"
                                    >List</a>
                                </li>
                                <li>
                                    <a href="invoice-detail.html"
                                    >Detail</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-person-circle"></i>
                                </span>
                                <span>Utilisateurs</span>
                            </a>
                            <ul>
                                <li><a href="user-list.html">List View</a></li>
                                <li><a href="user-grid.html">Grid View</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="settings.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-gear"></i>
                                </span>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="pricing-table.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-wallet2"></i>
                                </span>
                                <span>Pricing Table</span>
                                <span className="badge bg-success ms-auto">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="search-page.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-search"></i>
                                </span>
                                <span>Search Page</span>
                            </a>
                        </li>
                        <li>
                            <a href="faq.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-question-circle"></i>
                                </span>
                                <span>FAQ</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar
