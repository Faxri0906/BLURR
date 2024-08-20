import { useLocation } from "react-router-dom";
import Logo from "../../shared/Logo";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../../shared/Menu";
export default function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    const {pathname} = useLocation();
  return (
    <header className="py-8">
        <nav className="flex justify-between items-center container">
            {pathname !== "/" && <Logo />}
            <motion.div onClick={() => {setIsOpen(!isOpen)}} animate={isOpen ? "open" : "closed"} initial={false} 
                variants={{
                    open: {
                        filter: "invert(1)",
                    },
                    closed: {
                        filter: "invert(0)",
                    },
                }} 
                className="relative h-6 w-[120px] flex flex-col justify-between cursor-pointer ml-auto z-[11]">
                <motion.div
                variants={{
                    closed: {
                        height: "2px",
                        width: "100%",
                    },
                    open: {
                        height: "2px",
                        width: "100%",
                    },
                }} 
                 className="bg-white h-0.5 w-full"></motion.div>
                <motion.div
                variants={{
                    closed: {
                        height: "2px",
                        width: "100%",
                        marginLeft: "auto",
                    },
                    open: {
                        height: "2px",
                        width: "75%",
                        marginLeft: "auto",
                    },
                }} 
                 className="bg-white h-0.5 w-full"></motion.div>
                <motion.div
                variants={{
                    closed: {
                        height: "2px",
                        width: "100%",
                        marginLeft: "auto",
                    },
                    open: {
                        height: "2px",
                        width: "50%",
                        marginLeft: "auto",
                    },
                }} 
                 className="bg-white h-0.5 w-full"></motion.div>
            </motion.div>
            <AnimatePresence>
                {isOpen && <Menu />}
            </AnimatePresence>
        </nav>
    </header>
  );
};