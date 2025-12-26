import React from 'react';
import RestaurantCard from './RestaurantCard';
import './RestaurantList.css';

const RestaurantList = ({ restaurants, loading, error }) => {
    if (loading) {
        return (
            <div className="restaurant-list-loading">
                <div className="spinner"></div>
                <p>جارٍ البحث عن مطاعم رائعة...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="restaurant-list-error">
                <p>⚠️ {error}</p>
            </div>
        );
    }

    if (restaurants.length === 0) {
        return (
            <div className="restaurant-list-empty">
                <span className="empty-icon">🍽️</span>
                <h3>No restaurants found</h3>
                <p>Try a different search term</p>
            </div>
        );
    }

    return (
        <div className="restaurant-list">
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
    );
};

export default RestaurantList;
