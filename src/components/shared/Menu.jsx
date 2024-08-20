import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import fon from "../../../public/fon.png";
import butterfly from "../../../public/butterfly.png";
import phon from "../../../public/phon.png";
import phone from "../../../public/phone.png";
import { useState } from "react";
export default function Menu() {
    const [hover,setHover] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
    });
  return (
        <motion.div
            initial={{
                clipPath: "circle(0.3% at 90% 5%)",
            }}
            animate={{
                clipPath: "circle(141.4% at 90% 5%)",
            }}
            exit={{
                clipPath: "circle(0.3% at 90% 5%)",
            }}
            className="h-screen fixed top-0 left-0 w-full bg-white !text-customBlack z-10 flex flex-col">
            <AnimatePresence  mode="wait">
                {hover.first && <motion.img 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                 src={fon} className="z-[11] fixed opacity-50 w-full h-full object-cover object-bottom"/>}
                {hover.second && <motion.img
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}} 
                 src={butterfly} className="z-[11] fixed opacity-50 w-full h-full object-cover object-center"/>}
                {hover.third && <motion.img 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                 src={phon} className="z-[11] fixed opacity-50 w-full h-full object-cover object-bottom"/>}
                {hover.fourth && <motion.img 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                 src={phone} className="z-[11] fixed opacity-50 w-full h-full object-cover object-bottom"/>}
            </AnimatePresence>
            <div className="container py-5 h-full relative flex flex-col items-start z-[12]">
                <div className="invert">
                    <Logo />
                </div>
                <div className="flex flex-col gap-8 mt-24 font-bold">
                    <motion.div 
                        whileHover={{
                            opacity: 0.7,
                            color: "white",
                        }}
                        onHoverStart={() => {
                            setHover({
                                first: true,
                                second: false,
                                third: false,
                                fourth: false,
                            });
                        }}
                        onHoverEnd={() => {
                            setHover({
                                first: false,
                                second: false,
                                third: false,
                                fourth: false,
                            });
                        }}
                        className="text-9xl cursor-pointer hover:text-black/30">
                            HOME
                    </motion.div>
                    <motion.div whileHover={{
                        opacity: 0.7,
                        color: "white",
                    }}
                    onHoverStart={() => {
                        setHover({
                            first: false,
                            second: true,
                            third: false,
                            fourth: false,
                        });
                    }}
                    onHoverEnd={() => {
                        setHover({
                            first: false,
                            second: false,
                            third: false,
                            fourth: false,
                        });
                    }} className="text-9xl cursor-pointer hover:text-black/30">
                        ABOUT
                    </motion.div>
                    <motion.div whileHover={{
                        opacity: 0.7,
                        color: "white",
                    }}
                    onHoverStart={() => {
                        setHover({
                            first: false,
                            second: false,
                            third: true,
                            fourth: false,
                        });
                    }}
                    onHoverEnd={() => {
                        setHover({
                            first: false,
                            second: false,
                            third: false,
                            fourth: false,
                        });
                    }} className="text-9xl cursor-pointer hover:text-black/30">
                        WORKS
                    </motion.div>
                    <motion.div whileHover={{
                        opacity: 0.7,
                        color: "white",
                    }}
                    onHoverStart={() => {
                        setHover({
                            first: false,
                            second: false,
                            third: true,
                            fourth: true,
                        });
                    }}
                    onHoverEnd={() => {
                        setHover({
                            first: false,
                            second: false,
                            third: false,
                            fourth: false,
                        });
                    }} className="text-9xl cursor-pointer hover:text-black/30">
                        GET IN TOUCH
                    </motion.div>
                </div>
            </div>
            <div className="h-full w-[1px] bg-black/5 fixed z-[11] left-[20%]"></div>
            <div className="h-full w-[1px] bg-black/5 fixed z-[11] left-[40%]"></div>
            <div className="h-full w-[1px] bg-black/5 fixed z-[11] left-[60%]"></div>
            <div className="h-full w-[1px] bg-black/5 fixed z-[11] left-[80%]"></div>
        </motion.div>
  );
};