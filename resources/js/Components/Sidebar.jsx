import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from '@inertiajs/react';

function Sidebar() {
    return (
        <>
            <div className="menu">
                <div className="menu-body mt-5 pt-5" >
                    <ul>
                        <li>
                            <a className="active"
                                href="index.html">
                                <span className="nav-link-icon">
                                    <i className="bi bi-bar-chart"></i>
                                </span>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="menu-divider">Gestion</li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-receipt"></i>
                                </span>
                                <span>Itinéraires</span>
                            </a>
                            <ul>
                                <li>
                                    <Link href={route('itineraires')}>Tous les itinéraires</Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <span className="nav-link-icon">
                                    <i className="bi bi-truck"></i>
                                </span>
                                <span>Véhicules</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="product-list.html">List
                                        View</a>
                                </li>
                                <li>
                                    <a href="product-grid.html">Grid
                                        View</a>
                                </li>
                                <li>
                                    <a href="product-detail.html">Product Detail</a>
                                </li>
                                <li>
                                    <a href="shopping-cart.html">Shopping
                                        Cart</a>
                                </li>
                                <li>
                                    <a href="checkout.html">Checkout</a>
                                </li>
                            </ul>
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
