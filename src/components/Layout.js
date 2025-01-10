import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {

    return (
        <section className="Main">
            <Header />
            <main className="conteudo">
                {children}
            </main>
            <Footer />
        </section>
    );
};

export default Layout;
