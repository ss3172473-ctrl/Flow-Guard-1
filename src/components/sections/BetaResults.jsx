import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../../constants/animations';

const BetaResults = () => {
    const [hasTriggered, setHasTriggered] = useState(false);

    return (
        <section className="beta-results" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* 임팩트 메시지 오버레이 */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    pointerEvents: 'none'
                }}
                initial={{ opacity: 0, y: -100, scale: 1.2 }}
                whileInView={{
                    opacity: [0, 1, 1, 0],
                    y: [-100, 0, 0, 20],
                    scale: [1.2, 1, 1, 0.95]
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 2.5,
                    times: [0, 0.3, 0.7, 1],
                    ease: [0.87, 0, 0.13, 1]
                }}
                onViewportEnter={() => setHasTriggered(true)}
            >
                <motion.div
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        color: 'white',
                        textAlign: 'center',
                        padding: '40px',
                        borderRadius: '24px',
                        background: 'rgba(15, 23, 42, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '2px solid rgba(16, 185, 129, 0.3)',
                        boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)',
                        lineHeight: '1.3'
                    }}
                    initial={{ rotate: -3 }}
                    animate={{
                        rotate: [0, 2, -2, 0],
                        boxShadow: [
                            '0 20px 60px rgba(16, 185, 129, 0.3)',
                            '0 30px 80px rgba(16, 185, 129, 0.5)',
                            '0 20px 60px rgba(16, 185, 129, 0.3)'
                        ]
                    }}
                    transition={{
                        rotate: { duration: 0.6, delay: 0.3 },
                        boxShadow: { duration: 0.8, delay: 0.3, repeat: 1 }
                    }}
                >
                    <span style={{ color: 'var(--secondary-emerald)' }}>FlowGuard</span>는<br />
                    딥러닝 AI로 집중력 문제를<br />
                    해결합니다.
                </motion.div>
            </motion.div>

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 2.5 }}
                >
                    <div className="section-badge">REAL EVIDENCE</div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 2.7 }}
                    >[실제 베타 테스터 1개월 변화 수치]</motion.h2>
                    <p className="beta-impact-text">실제 이용자들의 변화</p>
                </motion.div>
                <motion.div
                    className="beta-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 3 }}
                >
                    <motion.div className="beta-card" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}>
                        <div className="beta-user">A학생 (초6)</div>
                        <div className="beta-stats">
                            <div className="stat">
                                <span className="label">몰입도</span>
                                <span className="value up">37% → 81%</span>
                            </div>
                            <div className="stat">
                                <span className="label">총 순공시간</span>
                                <span className="value">1.2h → 2.8h</span>
                            </div>
                        </div>
                        <p className="beta-review">"이제 스스로 공부 시간을 체크해요. 숫자가 오르는 게 재밌대요."</p>
                    </motion.div>

                    <motion.div className="beta-card" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}>
                        <div className="beta-user">B학생 (중1)</div>
                        <div className="beta-stats">
                            <div className="stat">
                                <span className="label">몰입도</span>
                                <span className="value up">29% → 76%</span>
                            </div>
                            <div className="stat">
                                <span className="label">총 순공시간</span>
                                <span className="value">0.9h → 2.5h</span>
                            </div>
                        </div>
                        <p className="beta-review">"스마트폰 보는 시간이 확 줄었어요. 데이터로 보니 확실하더라고요."</p>
                    </motion.div>

                    <motion.div className="beta-card" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}>
                        <div className="beta-user">C학생 (중2)</div>
                        <div className="beta-stats">
                            <div className="stat">
                                <span className="label">몰입도</span>
                                <span className="value up">44% → 89%</span>
                            </div>
                            <div className="stat">
                                <span className="label">총 순공시간</span>
                                <span className="value">1.5h → 3.2h</span>
                            </div>
                        </div>
                        <p className="beta-review">"집중력이 늘면서 성적도 함께 올랐어요. 수학 30점 상승!"</p>
                    </motion.div>
                </motion.div>

                <motion.p
                    className="data-note"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.5 }}
                >
                    데이터로 확인하는 우리 아이의 성장
                </motion.p>
            </div>
        </section>
    );
};

export default BetaResults;
