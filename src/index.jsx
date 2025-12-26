/**
 * index.jsx - نقطة الدخول الرئيسية للتطبيق
 * ملف بسيط لتشغيل تطبيق React
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// إنشاء root element وتشغيل التطبيق
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
