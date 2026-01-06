import React from 'react';
import { motion } from 'framer-motion';

const SocialProofSection = () => (
    <section className="social-proof">
        <motion.div
            className="container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="review-box">
                <blockquote>"공부하라고 잔소리할 일이 줄었어요. 데이터로 칭찬해주니 아이가 스스로 성취감을 느끼더라고요."</blockquote>
                <cite>- 중등 2학년 학부모 김OO님</cite>
            </div>
            <div className="pricing">
                <h3>하루 3,300원</h3>
                <p>아이의 10년 뒤 성적을 바꾸는 가장 저렴한 보험</p>
                <motion.button
                    className="final-cta highlight-pulse"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}
                >
                    내 아이 전두엽 깨우기, 지금 시작하세요
                </motion.button>
            </div>
        </motion.div>
    </section>
);

export default SocialProofSection;
