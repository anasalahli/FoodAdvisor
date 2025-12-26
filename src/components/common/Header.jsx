/**
 * Header Component - الهيدر مع زر Dark Mode
 * 
 * عرض شعار الموقع وزر التبديل بين الوضع النهاري والليلي
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    {/* شعار الموقع */}
                    <Link to="/" className="logo">
                        <span className="logo-icon">🍽️</span>
                        <span className="logo-text">FoodAdvisor</span>
                    </Link>

                    {/* زر Dark Mode */}
                    <button
                        className="dark-mode-toggle"
                        onClick={toggleDarkMode}
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
