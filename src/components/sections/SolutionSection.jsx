import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap } from 'lucide-react';
import webcamImg from '../../assets/webcam_child_face.png';
import browserImg from '../../assets/study_browser_screen.png';
import motherImg from '../../assets/mother_smiling.png';

const SolutionSection = () => (
    <section id="solution" className="solution">
        <div className="container solution-layout">
            <motion.div
                className="solution-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="section-badge">AI SOLUTION</div>
                <h2>AI가 되살리는 '엉덩이 힘'</h2>
                <div className="solution-features">
                    <div className="feature-item">
                        <div className="icon-box"><Eye size={24} /></div>
                        <div>
                            <h4>0.1초의 빈틈없는 감시</h4>
                            <p>저희 AI 학습관은 단순히 캠을 켜놓는 것이 아닌, 0.1초 단위 시선 추적 기술을 통해 아이의 뇌가 활성화되는 '진짜 몰입 시간'을 측정합니다.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="icon-box"><Zap size={24} /></div>
                        <div>
                            <h4>AI 시선 & 자세 분석</h4>
                            <p>AI가 시선과 고개 각도를 분석하여 <strong>정면 응시(집중), 옆눈질(분산), 엎드림(피로)</strong>을 실시간 감지합니다.</p>
                        </div>
                    </div>
                </div>
                <div className="solution-impact-box glass">
                    <div className="impact-header">
                        <Zap size={20} className="icon" />
                        <span>데이터가 만드는 성취감</span>
                    </div>
                    <ul className="impact-list">
                        <li>고개 각도와 시선을 0.1초 단위로 분석해요</li>
                        <li>막연한 칭찬보다 <strong>숫자로 보여주는 몰입도</strong></li>
                        <li>성장을 직접 확인하며 스스로 <strong>자신감을 얻어요</strong></li>
                    </ul>
                </div>
            </motion.div>
            <motion.div
                className="solution-visual"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="mockup-container">
                    <div className="dashboard-mockup dark-glass">
                        <div className="mockup-header">
                            <span>LIVE Analysis</span>
                            <div className="status-dot"></div>
                        </div>
                        <div className="mockup-body">
                            <div className="live-view-grid">
                                <div className="webcam-view">
                                    <img src={webcamImg} alt="Child Webcam" />
                                    <div className="gaze-overlay">
                                        <div className="gaze-dot pulse"></div>
                                        <div className="gaze-label">Focusing</div>
                                    </div>
                                </div>
                                <div className="browser-view">
                                    <img src={browserImg} alt="Study Browser" />
                                    <div className="screen-label">Student Screen</div>
                                </div>
                            </div>
                            <div className="metrics">
                                <div className="metric"><span>집중도</span><strong>92%</strong></div>
                                <div className="metric"><span>순공시간</span><strong>1h 42m</strong></div>
                            </div>
                        </div>
                    </div>
                    <img src={motherImg} alt="Mother smiling" className="floating-img" />
                </div>
            </motion.div>
        </div>
    </section>
);

export default SolutionSection;
