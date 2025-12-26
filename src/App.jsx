/**
 * App Component - المكون الرئيسي مع Dark Mode
 * 
 * يحتوي على:
 * - الهيدر
 * - المسارات (الصفحة الرئيسية + صفحة المطعم)
 * - الفوتر
 * - نظام Dark Mode
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import './App.css';

function App() {
    // حالة Dark Mode - نجلبها من localStorage أو نستخدم القيمة الافتراضية
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    // حفظ التفضيل في localStorage عند التغيير
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));

        // إضافة أو إزالة class من body
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    // دالة التبديل بين الوضعين
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Router>
            <div className="app">
                {/* الهيدر مع زر Dark Mode */}
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                {/* المحتوى الرئيسي */}
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/restaurant/:id" element={<RestaurantPage />} />
                    </Routes>
                </main>

                {/* الفوتر */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
