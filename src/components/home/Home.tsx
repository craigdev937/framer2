import React from "react";
import "./Home.css";
import { AnimatePresence } from "framer-motion";
import { Products } from "../products/Products";
import { Transition } from "../transition/Transition";

export const Home = (): JSX.Element => {
    const [transition, setTransition] = React.useState(false);
    const [showProduct, setShowProduct] = React.useState(false);

    return (
    <React.Fragment>
        <main className="home">
            {showProduct ? (
                <Products 
                    showProduct={showProduct}
                    setShowProduct={setShowProduct}
                    transition={transition}
                    setTransition={setTransition}
                />
            ) : (
                <div className="home__cover">
                    <aside className="home__overlay">
                        <div className="home__body">
                            <section className="top__text">
                                <p>perfume network</p>
                            </section>
                            <section className="lower__text">
                                <aside className="button"
                                    onClick={() => {
                                        setTransition(!transition);
                                        setTimeout(
                                            () => setShowProduct(!showProduct), 
                                            500
                                        );
                                    }}
                                >
                                    <p>click</p>
                                </aside>
                            </section>
                        </div>
                    </aside>
                </div>
            )}
            <AnimatePresence mode="wait">
                {transition && <Transition />}
            </AnimatePresence>
        </main>
    </React.Fragment>
    );
};


