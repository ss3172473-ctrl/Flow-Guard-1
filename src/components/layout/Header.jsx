import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => (
    <header className="header glass">
        <div className="container header-content">
            <div className="logo">
                <Shield size={24} className="logo-icon" />
                <span>FlowGuard</span>
            </div>
            <nav className="desktop-nav">
                <a href="#problem">위험성</a>
                <a href="#solution">AI솔루션</a>
                <a href="#system">시스템</a>
                <a href="#report">리포트</a>
            </nav>
            <button className="cta-button" onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}>내 아이 집중력 MRI 촬영하기</button>
        </div>
    </header>
);

export default Header;
