/**
 * Footer Component - الفوتر البسيط
 * 
 * معلومات أساسية ونص حقوق النشر فقط
 * بدون روابط معقدة
 */

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* معلومات الموقع */}
                    <div className="footer-section">
                        <h4>FoodAdvisor</h4>
                        <p className="text-muted">
                            دليلك لأفضل المطاعم في ليبيا
                        </p>
                    </div>

                    {/* روابط سريعة */}
                    <div className="footer-section">
                        <h5>روابط سريعة</h5>
                        <ul className="footer-links">
                            <li><a href="/">الرئيسية</a></li>
                            <li><a href="/">المطاعم</a></li>
                            <li><a href="/">حول</a></li>
                        </ul>
                    </div>

                    {/* تواصل معنا */}
                    <div className="footer-section">
                        <h5>تواصل معنا</h5>
                        <ul className="footer-links">
                            <li><a href="#">فيسبوك</a></li>
                            <li><a href="#">إنستجرام</a></li>
                            <li><a href="#">تويتر</a></li>
                        </ul>
                    </div>
                </div>

                {/* حقوق النشر */}
                <div className="footer-bottom">
                    <p>© 2025 FoodAdvisor. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
