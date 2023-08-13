import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>
                    Welcome to <span className="nowrap">Pindro's Notes!</span>
                </h1>
            </header>
            <main className="public__main">
                <p>
                    Located in Beautiful Downtown Uyo city, Pindro Furnitures 
                    provides an aesthetically pleasing original wood furnitures
                    that would soothe your needs 
                </p>
                <address className="public__addr">
                    Pindro Furnitures <br />
                    123 street <br />
                    Uyo city, A. Ibom <br />
                    <a href="+2340123456789">012 345-6789</a>
                </address> 
                <br />
                <p>Owner: Austine Pindro</p>
            </main>
            <footer>
                <Link to='/login'>Employee Login</Link>
            </footer>
        </section>
    );

    return content;
}

export default Public;
