import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area, LineChart, Line, XAxis, Tooltip } from 'recharts';
import { attentionData, cliffData } from '../../constants/data';
import { containerVariants, cardVariants } from '../../constants/animations';

const ProblemSection = () => {
    return (
        <section id="problem" className="problem">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>우리 아이, 진짜 공부하고 있을까요?</h2>
                    <p style={{ fontSize: '1.3rem', color: '#334155', fontWeight: 500 }}>
                        책상 앞 3시간, 하지만 <strong style={{ color: '#ef4444', fontSize: '1.5rem' }}>진짜 몰입은 단 12분</strong>일 수 있습니다.
                    </p>
                </motion.div>

                <motion.div
                    className="problem-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div
                        className="problem-card"
                        variants={cardVariants}
                    >
                        <h3>평균 집중력 실태</h3>
                        <div className="stat-value">단 8초</div>
                        <p>스마트폰 중독으로 짧아진 뇌의 집중 시간</p>
                        <motion.div
                            className="chart-container"
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                        >
                            <ResponsiveContainer width="100%" height={200}>
                                <AreaChart data={attentionData}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#ef4444"
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                        animationDuration={2000}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </motion.div>
                        <p className="card-footer">자극적인 미디어에 중독된 '팝콘 브레인' 현상</p>
                    </motion.div>

                    <motion.div
                        className="problem-card highlight"
                        variants={cardVariants}
                    >
                        <h3>중등 성적 절벽</h3>
                        <p>심층 집중력 부재로 인한 성적 급락 곡선</p>
                        {/* 
              CHART FIX: Mask Reveal Implementation
              Instead of animating the container's clip-path or width which conflicts with Recharts,
              we use a white overlay mask that slides away to the right.
            */}
                        <div className="chart-container" style={{ position: 'relative' }}>
                            <ResponsiveContainer width="100%" height={220}>
                                <LineChart data={cliffData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <XAxis dataKey="grade" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                                        labelStyle={{ fontWeight: 700, color: '#0F172A' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="score"
                                        stroke="#ef4444"
                                        strokeWidth={4}
                                        dot={{ r: 6, fill: '#ef4444', strokeWidth: 2, stroke: '#fff' }}
                                        activeDot={{ r: 8, strokeWidth: 0 }}
                                        // Recharts internal animation
                                        animationDuration={2000}
                                        animationBegin={300}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                            {/* The Mask Element */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: '#F0F9FF', // Matches the card background (var(--accent-light-blue))
                                    zIndex: 10,
                                    transformOrigin: 'right', // Shrinks towards the right
                                }}
                                initial={{ scaleX: 1 }} // Fully covering
                                whileInView={{ scaleX: 0 }} // Shrinks to 0
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                                viewport={{ once: true, amount: 0.3 }}
                            />
                        </div>

                        <p className="card-footer">초등 상위권 80%가 중학 진학 후 경험하는 현실</p>
                        <div className="cliff-warning">
                            <p>단순 암기인 초등 공부는 집중력 없이도 가능합니다.<br />
                                하지만 사고력을 요하는 고등 지식은 <strong>'심층 집중력'</strong> 없이는 절대 정복할 수 없습니다.</p>
                        </div>
                    </motion.div>
                </motion.div>


            </div>
        </section>
    );
};

export default ProblemSection;
