import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aiConsultImg from '../../assets/consultation_robot_v3.png';

const SystemSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const y2 = useTransform(scrollYProgress, [0, 1], [200, 0]);
    const y3 = useTransform(scrollYProgress, [0, 1], [300, 0]);
    const y4 = useTransform(scrollYProgress, [0, 1], [400, 0]);

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <section id="system" className="system" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    style={{ opacity: opacity }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>부모님과 함께하는 학습 케어</h2>
                    <p>감시가 아니라, 아이의 학습 환경을 지키는 가장 확실한 방법입니다.</p>
                </motion.div>

                <div className="kakao-mockup">
                    {/* Message 1 */}
                    <motion.div className="kakao-msg-wrapper" style={{ y: y1, opacity: opacity }}>
                        <div className="kakao-profile">
                            <img src={aiConsultImg} alt="AI Bot" />
                        </div>
                        <div className="kakao-content">
                            <div className="kakao-name">FlowGuard</div>
                            <div className="kakao-bubble">
                                [격려] OO이가 초집중 상태입니다! (60분 돌파) 🚀
                            </div>
                        </div>
                    </motion.div>
                    {/* Message 2 */}
                    <motion.div className="kakao-msg-wrapper" style={{ y: y2, opacity: opacity }}>
                        <div className="kakao-profile">
                            <img src={aiConsultImg} alt="AI Bot" />
                        </div>
                        <div className="kakao-content">
                            <div className="kakao-name">FlowGuard</div>
                            <div className="kakao-bubble warning">
                                [주의] OO이가 3분간 자리를 비웠습니다. 확인이 필요합니다. ⚠️
                            </div>
                        </div>
                    </motion.div>
                    {/* Message 3 */}
                    <motion.div className="kakao-msg-wrapper" style={{ y: y3, opacity: opacity }}>
                        <div className="kakao-profile">
                            <img src={aiConsultImg} alt="AI Bot" />
                        </div>
                        <div className="kakao-content">
                            <div className="kakao-name">FlowGuard</div>
                            <div className="kakao-bubble">
                                수학 공부 종료. ✅<br />
                                순공 시간: 1시간 40분<br />
                                평균 집중도: 88% (상위 10%)<br />
                                📝 OO이의 한 줄 회고: '오늘은 함수 문제를 다 풀어서 뿌듯해요.'
                            </div>
                        </div>
                    </motion.div>
                    {/* Message 4 */}
                    <motion.div className="kakao-msg-wrapper" style={{ y: y4, opacity: opacity }}>
                        <div className="kakao-profile">
                            <img src={aiConsultImg} alt="AI Bot" />
                        </div>
                        <div className="kakao-content">
                            <div className="kakao-name">FlowGuard</div>
                            <div className="kakao-bubble clickable">
                                📊 [일간 리포트] <br />
                                오늘 OO이는 총 3시간 20분간 몰입했습니다.<br />
                                오늘 가장 집중력이 높았던 시간은 오후 4시였습니다.<br />
                                <span className="link-text">클릭 시 일간 상세 리포트 페이지 접속</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SystemSection;
