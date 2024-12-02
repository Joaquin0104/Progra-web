import React from 'react';
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';
import Navigationbar from '../../components/navigationbar';
import CartD from '../../components/Cart';
import '../../styles/Carrito.css';

const Cart = () =>{
    return(
        <>
            <Header/>
            <main className="main-content">
                <aside className="left-sidebar"></aside>
                <section className="center-content">
                <Navigationbar/>
                <CartD/>
                </section>
                <aside className="right-sidebar"></aside>
            </main>
            <Footer/>
        </>
    )
    
}

export default Cart;