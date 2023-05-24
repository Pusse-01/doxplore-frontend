import React from 'react';
import './style.css';

const Navbar = () => {
    const currentPath = window.location.pathname; // Get the current path

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    {/* Logo */}
                    <div className="flex items-center py-4">
                        <a href="/" className="text-white text-2xl font-bold font-circular">
                            DOXPLORE
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="/"
                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${currentPath === '/' ? 'text-blue-600' : ''
                                }`}
                        >
                            Home
                        </a>
                        <a
                            href="/pricing"
                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${currentPath === '/pricing' ? 'text-blue-600' : ''
                                }`}
                        >
                            Pricing
                        </a>
                        <a
                            href="/contact"
                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${currentPath === '/contact' ? 'text-blue-600' : ''
                                }`}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

