import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../../constants/animations';

const BetaResults = () => (
    <section className="beta-results">
        <div className="container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="section-badge">REAL EVIDENCE</div>
                <h2>[실제 베타 테스터 1개월 변화 수치]</h2>
                <p className="beta-impact-text">실제 이용자들의 변화</p>
            </motion.div>
            <motion.div
                className="beta-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className="beta-card" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}>
                    <div className="beta-user">A학생 (초6)</div>
                    <div className="beta-metric">평균 집중 지속 시간</div>
                    <div className="beta-value-group">
                        <span className="before">12분</span>
                        <ArrowRight className="arrow" />
                        <span className="afterhighlight">42분</span>
                    </div>
                    <div className="beta-growth">250% 상승 🚀</div>
                </motion.div>
                <motion.div className="beta-card" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}>
                    <div className="beta-user">B학생 (중2)</div>
                    <div className="beta-metric">일일 순공 중 '딴짓 비율'</div>
                    <div className="beta-value-group">
                        <span className="before">40%</span>
                        <ArrowRight className="arrow" />
                        <span className="afterhighlight">5% 미만</span>
                    </div>
                    <div className="beta-growth">획기적 감소 📉</div>
                </motion.div>
            </motion.div>

            <div className="trust-bridge">
                <p>데이터로 확인하는 <strong>우리 아이의 성장</strong></p>
                <div className="line"></div>
            </div>
        </div>
    </section>
);

export default BetaResults;
