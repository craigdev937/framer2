import React from "react";
import "./Navbar.css";

export const Navbar = (): JSX.Element => {
    return (
        <React.Fragment>
            <main className="navbar">
                <section className="logo">
                    <p>perf</p>
                    <img src="/images/logo.png" alt="Logo" />
                    <p>me</p>
                </section>
                <section className="menu">
                    <section className="icon">
                        <aside className="bar1"></aside>
                        <aside className="bar2"></aside>
                        <aside className="bar3"></aside>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
};



