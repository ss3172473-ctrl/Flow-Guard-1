import React from 'react';
import { motion } from 'framer-motion';
import AnimatedNumber from '../ui/AnimatedNumber';

const ReportSection = () => {
    const circumference = 2 * Math.PI * 90; // r=90

    return (
        <section id="report" className="report">
            <div className="container">
                <motion.div
                    className="report-card glass"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1 }}
                >
                    <div className="report-header">
                        <h3>오늘의 몰입 리포트</h3>
                        <span className="date">2026. 01. 05</span>
                    </div>
                    <div className="report-grid">
                        <div className="main-stats">
                            <div className="stat-circle-group">
                                <div className="score-circle-wrapper">
                                    <svg width="220" height="220" viewBox="0 0 220 220" className="score-svg">
                                        <circle cx="110" cy="110" r="90" fill="none" stroke="#e2e8f0" strokeWidth="15" />
                                        <motion.circle
                                            cx="110"
                                            cy="110"
                                            r="90"
                                            fill="none"
                                            stroke="#10B981"
                                            strokeWidth="15"
                                            strokeLinecap="round"
                                            strokeDasharray={circumference}
                                            initial={{ strokeDashoffset: circumference }}
                                            whileInView={{ strokeDashoffset: circumference * (1 - 0.88) }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                                            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                                        />
                                    </svg>
                                    <div className="score-content">
                                        <span className="label">몰입 점수</span>
                                        <span className="value"><AnimatedNumber value={88} /></span>
                                        <span className="rank">상위 5%</span>
                                    </div>
                                </div>
                                <div className="eff-metric">
                                    <span>학습 효율</span>
                                    <strong><AnimatedNumber value={94} />%</strong>
                                </div>
                            </div>
                        </div>
                        <div className="report-details">
                            <div className="detail-item">
                                <div className="detail-header">
                                    <span>순도 100% 몰입 시간</span>
                                    <strong>2시간 15분</strong>
                                </div>
                                <p className="detail-sub">전체 학습 시간 중 '진짜 집중한 시간'만 추출하여 표시.</p>
                                <div className="progress-bar">
                                    <motion.div
                                        className="fill"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '92%' }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    />
                                </div>
                            </div>

                            <div className="retrospection-grid">
                                <div className="child-voice">
                                    <strong>아이의 목소리 🗣️</strong>
                                    <p>"수학 문제가 어려워서 잠깐 멈췄어요. 다음에는 모르는 문제 표시해두고 계속 풀어볼게요."</p>
                                </div>
                                <div className="ai-solution">
                                    <strong>AI의 솔루션 🤖</strong>
                                    <p>"OO이는 오후 4시경 집중력이 급락하는 패턴을 보입니다. 이때 10분간의 스트레칭을 추천합니다."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-container">
                        <div className="timeline-header">
                            <span>몰입 타임라인</span>
                            <span className="legend">
                                <i className="dot green"></i> 집중 <i className="dot red"></i> 하락
                            </span>
                        </div>
                        <motion.div
                            className="traffic-light-timeline"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.2 }
                                }
                            }}
                        >
                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment green"></motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment green"></motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment yellow"></motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment green"></motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment red clickable">
                                <div className="tooltip-reason">사유: 수학 문제 막힘</div>
                            </motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment green"></motion.div>
                        </motion.div>
                        <p className="timeline-hint">세션 종료 시 집중 하락 구간의 사유를 직접 입력해야 합니다.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReportSection;
