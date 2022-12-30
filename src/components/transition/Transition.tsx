import React from "react";
import "./Transition.css";
import { motion } from "framer-motion";

const TransAnimation = {
    hidden: { scaleY: 2, y: 500 },
    show: { scaleY: 3, y: -2000 },
    hide: { scaleY: 2, y: 1200 }
};

export const Transition = (): JSX.Element => {
    return (
        <React.Fragment>
            <motion.section 
                className="transition"
                variants={TransAnimation}
                initial="hidden"
                animate="show"
                exit="hide"
                transition={{ duration: 2.5 }}
            />
        </React.Fragment>
    );
};

