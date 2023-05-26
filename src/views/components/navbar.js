// import React from 'react';
// import './style.css';

// const Navbar = () => {
import React, { useState } from 'react';
import './style.css';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('/'); // Set the initial active tab to '/'

    const handleTabClick = (path) => {
        setActiveTab(path); // Update the active tab when a tab is clicked
    };

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
                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeTab === '/' ? 'text-blue-600' : ''
                                }`}
                            onClick={() => handleTabClick('/')}
                        >
                            Home
                        </a>
                        <a
                            href="/pricing"
                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeTab === '/pricing' ? 'text-blue-600' : ''
                                }`}
                            onClick={() => handleTabClick('/pricing')}
                        >
                            Pricing
                        </a>
                        <a
                            href="/contact"
                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeTab === '/contact' ? 'text-blue-600' : ''
                                }`}
                            onClick={() => handleTabClick('/contact')}
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

