import React from 'react';
import './RestaurantSearch.css';

const RestaurantSearch = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-container">
            <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    className="search-input"
                    placeholder="ابحث عن المطاعم بالاسم أو نوع الطعام..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                {searchTerm && (
                    <button
                        className="search-clear"
                        onClick={() => onSearchChange('')}
                        aria-label="Clear search"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};

export default RestaurantSearch;
