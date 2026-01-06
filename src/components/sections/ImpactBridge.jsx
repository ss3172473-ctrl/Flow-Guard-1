import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ImpactBridge = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax & Opacity effects
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <section
            ref={containerRef}
            className="impact-bridge"
            style={{
                position: 'relative',
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', // Dark premium background
                color: 'white',
                textAlign: 'center',
                padding: '20px'
            }}
        >
            {/* Background Abstract Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '20%',
                        width: '40vw',
                        height: '40vw',
                        background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(0,0,0,0) 70%)',
                        filter: 'blur(60px)',
                    }}
                />
            </div>

            <motion.div style={{ y, opacity, scale }} className="z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '30px',
                        fontSize: '0.9rem',
                        letterSpacing: '2px',
                        color: '#94a3b8',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        textTransform: 'uppercase'
                    }}>
                        The Answer Is
                    </span>
                </motion.div>

                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem'
                }}>
                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ display: 'block', color: 'white' }}
                    >
                        FlowGuard는
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{
                            display: 'block',
                            background: 'linear-gradient(to right, #34d399, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginTop: '10px'
                        }}
                    >
                        딥러닝 AI로
                    </motion.span>
                </h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                        fontWeight: '600',
                        color: '#e2e8f0',
                        marginTop: '20px'
                    }}
                >
                    집중력 문제를 <span style={{ textDecoration: 'underline', textDecorationColor: '#34d399', textUnderlineOffset: '6px' }}>해결합니다.</span>
                </motion.p>
            </motion.div>
        </section>
    );
};

export default ImpactBridge;
