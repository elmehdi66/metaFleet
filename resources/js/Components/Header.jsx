import React from 'react'
import logo from '/public/assets/images/13763782_5349528-01.svg'
import Dropdown from '@/Components/Dropdown';

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


                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
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
