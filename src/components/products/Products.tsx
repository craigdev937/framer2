import React from "react";
import "./Products.css";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { Data } from "../../data/dBase";

const prodAni = {
    show: {
        transition: { staggerChildren: 0.1 }
    }
};

const prodCardAni = {
    show: {
        y: [300, 0],
    }
};

type PROD = {
    showProduct: boolean,
    setShowProduct: React.Dispatch<
            React.SetStateAction<boolean>
        >,
    transition: boolean,
    setTransition: React.Dispatch<
            React.SetStateAction<boolean>
        >
};

export const Products = ({
    showProduct, setShowProduct, 
    transition, setTransition 
}: PROD): JSX.Element => {
    return (
        <React.Fragment>
        <main className="products">
            <aside className="products__body">
                <div className="products__dashboard">
                    <section className="top__section"
                        onClick={() => {
                            setTimeout(
                                () => setShowProduct(!showProduct), 
                                1000
                            );
                            setTransition(!transition);
                        }}>
                            <AiOutlineCaretLeft />
                            <p>back</p>
                    </section>
                    <section className="lower__section">
                        <p>
                            <BiChevronLeft />
                        </p>
                        <p className="right__icon">
                            <BiChevronRight />
                        </p>
                    </section>
                </div>
                <motion.section
                    className="product__container"
                    variants={prodAni}
                    animate="show">
                        {Data.map((perfume, index) => (
                            <motion.section
                                key={index}
                                className="product__card"
                                variants={prodCardAni}>
                                    <img 
                                        src={`../images/${
                                            perfume.image
                                        }`} 
                                        alt="" 
                                    />
                                    <p className="card__name">{perfume.name}</p>
                                    <p className="card__price">{perfume.price}</p>
                            </motion.section>
                        ))}
                </motion.section>
            </aside>
        </main>
        </React.Fragment>
    );
};


