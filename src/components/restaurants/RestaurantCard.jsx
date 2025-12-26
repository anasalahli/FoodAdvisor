/**
 * RestaurantCard Component - بطاقة عرض المطعم
 * 
 * تعرض معلومات المطعم بشكل جميل وبسيط:
 * - الصورة
 * - الاسم
 * - التقييم (نجوم)
 * - الفئة والسعر
 * 
 * بدون أزرار المفضلة أو أي تفاعل معقد
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
    /**
     * رسم النجوم بناءً على التقييم
     * @param {number} rating - التقييم من 1 إلى 5
     */
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        // النجوم الممتلئة
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="star full">⭐</span>);
        }

        // نصف نجمة إن وجدت
        if (hasHalfStar && fullStars < 5) {
            stars.push(<span key="half" className="star half">⭐</span>);
        }

        // النجوم الفارغة
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }

        return stars;
    };

    /**
     * تحويل الفئات من مصفوفة إلى نص
     */
    const getCategoryText = () => {
        if (Array.isArray(restaurant.category)) {
            return restaurant.category.join(', ');
        }
        return restaurant.category;
    };

    return (
        <Link to={`/restaurant/${restaurant.id}`} className="restaurant-card-link">
            <article className="restaurant-card">
                {/* صورة المطعم */}
                <div className="restaurant-image">
                    <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        loading="lazy"
                    />
                    <div className="image-overlay"></div>
                </div>

                {/* محتوى البطاقة */}
                <div className="restaurant-content">
                    {/* الاسم */}
                    <p className="restaurant-name">{restaurant.name}</p>

                    {/* التقييم بالنجوم */}
                    <div className="restaurant-rating">
                        <div className="stars">
                            {renderStars(restaurant.rating)}
                        </div>
                        <span className="rating-number">{restaurant.rating.toFixed(1)}</span>
                    </div>

                    {/* الفئة والسعر */}
                    <div className="restaurant-meta">
                        <span className="category">{getCategoryText()}</span>
                        <span className="separator">•</span>
                        <span className="price">{restaurant.priceRange}</span>
                    </div>

                    {/* المدينة */}
                    <div className="restaurant-city">
                        <span className="city-icon">📍</span>
                        <span>{restaurant.city}</span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default RestaurantCard;
