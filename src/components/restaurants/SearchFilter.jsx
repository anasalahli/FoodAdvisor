/**
 * SearchFilter Component - مكون الفلترة
 * 
 * يسمح للمستخدم بتصفية المطاعم حسب:
 * - المدينة
 * - الفئة
 * - نطاق السعر
 * - التقييم
 * 
 * بسيط وواضح بدون تعقيد
 */

import React from 'react';
import './SearchFilter.css';

const SearchFilter = ({ filters, onFilterChange }) => {
    // الفئات المتاحة
    const categories = [
        'معجنات',
        'شعبي',
        'بحري',
        'افطار صباحي',
        'اكل صحي',
        'عصائر',
        'ساندوتش'
    ];

    // المدن
    const cities = ['طرابلس', 'بنغازي', 'مصراتة', 'زليتن'];

    // نطاقات الأسعار
    const priceRanges = ['رخيص', 'متوسط', 'مرتفع', 'فاخر'];

    // مستويات التقييم
    const ratings = [
        { value: 4, label: '4 نجوم وأكثر' },
        { value: 3, label: '3 نجوم وأكثر' },
        { value: 2, label: '2 نجمة وأكثر' },
        { value: 0, label: 'جميع التقييمات' }
    ];

    /**
     * تحديث قيمة فلتر معين
     */
    const handleFilterChange = (filterType, value) => {
        onFilterChange({ ...filters, [filterType]: value });
    };

    /**
     * مسح جميع الفلاتر
     */
    const clearFilters = () => {
        onFilterChange({
            city: '',
            category: '',
            priceRange: '',
            minRating: 0
        });
    };

    return (
        <div className="search-filter">
            <div className="filter-header">
                <h3>🔍 تصفية النتائج</h3>
                <button className="btn-clear" onClick={clearFilters}>
                    مسح الكل
                </button>
            </div>

            <div className="filters-grid">
                {/* فلتر المدينة */}
                <div className="filter-item">
                    <label className="filter-label">المدينة</label>
                    <select
                        className="filter-select"
                        value={filters.city || ''}
                        onChange={(e) => handleFilterChange('city', e.target.value)}
                    >
                        <option value="">جميع المدن</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                {/* فلتر الفئة */}
                <div className="filter-item">
                    <label className="filter-label">الفئة</label>
                    <select
                        className="filter-select"
                        value={filters.category || ''}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                    >
                        <option value="">جميع الفئات</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* فلتر نطاق السعر */}
                <div className="filter-item">
                    <label className="filter-label">نطاق السعر</label>
                    <select
                        className="filter-select"
                        value={filters.priceRange || ''}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    >
                        <option value="">جميع الأسعار</option>
                        {priceRanges.map((range) => (
                            <option key={range} value={range}>
                                {range}
                            </option>
                        ))}
                    </select>
                </div>

                {/* فلتر التقييم */}
                <div className="filter-item">
                    <label className="filter-label">التقييم</label>
                    <select
                        className="filter-select"
                        value={filters.minRating || 0}
                        onChange={(e) =>
                            handleFilterChange('minRating', Number(e.target.value))
                        }
                    >
                        {ratings.map((rating) => (
                            <option key={rating.value} value={rating.value}>
                                {rating.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
