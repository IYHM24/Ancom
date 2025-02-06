import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const Counter = ({ finalNumber, texto, simbolo, className }) => {

    const [currentNumber, setCurrentNumber] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const clockRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.9 } // El 50% del div debe estar visible
        );
        if (clockRef.current) {
            observer.observe(clockRef.current);
        }
        return () => {
            if (clockRef.current) {
                observer.unobserve(clockRef.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (hasAnimated) {
            let animationFrame;
            const animate = () => {
                setCurrentNumber((prev) => {
                    if (prev < finalNumber) {
                        animationFrame = requestAnimationFrame(animate);
                        return prev + 1;
                    } else {
                        cancelAnimationFrame(animationFrame);
                        return finalNumber;
                    }
                });
            };
            animate();
            return () => cancelAnimationFrame(animationFrame);
        }
    }, [hasAnimated, finalNumber]);

    return (
        <motion.div
            ref={clockRef}
            className={`font-bold text-center mt-20` + className}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
        >
            <div className='!text-9xl flex justify-center'>
                <h2 className='!font-bold'>{simbolo}</h2>
                <h2 className='!font-bold'> {currentNumber && currentNumber.toString()} </h2>
            </div>
            <div className='flex justify-center'>
                <h2 className='!text-md'>{texto}</h2>
            </div>
        </motion.div>
    );
};