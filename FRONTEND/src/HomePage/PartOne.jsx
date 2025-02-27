import './PartOne.css';
import { motion, AnimatePresence } from "framer-motion";
import FirstSvg from "../assets/PartOne1.svg";
import SecondSvg from "../assets/PartOne2.svg";
import ThirdSvg from "../assets/PartOne3.svg";
import FourthSvg from "../assets/PartOne4.svg";
import { useEffect, useState } from 'react';

const PartOne = () => {
    const svgs = [FirstSvg, SecondSvg, ThirdSvg, FourthSvg];
    const texts=["Manage","Optimize","Organize","Prioritize"];

    const [currentSvgIndex, setCurrentSvgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSvgIndex((prevIndex) => (prevIndex + 1) % svgs.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [svgs.length]);

    return (
        <div className="PartOne">
            <motion.h1
                initial={{ y: 100, opacity: 0, scale: 1.2 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Master Your Tasks
                   <AnimatePresence mode="wait">
                    <motion.img
                        key={currentSvgIndex}
                        src={svgs[currentSvgIndex]}
                        alt="Task Illustration"
                        className="svgImage"
                        initial={{ y:50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                 </AnimatePresence>
                 <AnimatePresence mode="wait">
                    <motion.h2
                        key={currentSvgIndex}
                        initial={{ y:-50, opacity: 0 }}
                        animate={{ y:0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className='svgText'
                    >{texts[currentSvgIndex]}</motion.h2>
                 </AnimatePresence>
            </motion.h1>

            <motion.h1
                initial={{ y: 100, opacity: 0, scale: 1.2 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Own Your Time
            </motion.h1>
        </div>
    );
};

export default PartOne;
