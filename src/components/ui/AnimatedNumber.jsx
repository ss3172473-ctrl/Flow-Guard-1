import React, { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

export default AnimatedNumber;
