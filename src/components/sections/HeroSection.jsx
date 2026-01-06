import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../assets/hero_child_eye.png';

const HeroSection = () => (
    <section className="hero">
        <div className="hero-bg">
            <img src={heroImg} alt="Focused Eyes" />
            <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="hero-badge-container">
                    <span className="hero-badge">골든타임의 경고</span>
                </div>
                <h1>초5~중2, 우리 아이 전두엽을 살릴<br />마지막 <span>골든타임</span>입니다.</h1>
                <p>아이의 의지력을 결정하는 것은 막연한 다짐과 학부모의 압박이 아닌 시스템입니다.</p>
                <div className="hero-actions">
                    <button className="primary-btn" onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}>내 아이 집중력 MRI 촬영하기 <ArrowRight size={18} /></button>
                </div>
            </motion.div>
        </div>
        <div className="gaze-ui-overlay">
            <div className="gaze-target pulse"></div>
            <div className="gaze-line"></div>
            <div className="gaze-data">0.1s Gaze Tracking ACTIVE</div>
        </div>
    </section>
);

export default HeroSection;
