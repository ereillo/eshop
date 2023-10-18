import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div>
         <div className="home">
         <div className="home_container">
            <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" 
            alt="shop" className="home_image"/>

            <div className="home_row">
                <Product
                     id = "123456789"
                     title = "Adidas Superstar Colors 2020 - Las mejores zapatillas del mundo"
                     price = {30}
                     rating = {5}
                     image = "https://res.cloudinary.com/dj9npvnlg/image/upload/v1697630311/FU9521_sivasdescalzo-Adidas-SUPERSTAR-1610547754-1_acmvrw.webp"
                />
                <Product
                      id = "123456543"
                      title = "El corredor de fondo - El mejor libro de todos los tiempos"
                      price = {10}
                      rating = {5}
                      image = "https://res.cloudinary.com/dj9npvnlg/image/upload/v1697660125/9788495346230_nimogi.jpg"
                />
            </div>

            <div className="home_row">
            <Product
                    id = "1523443"
                    title = "El Viaje de Chihiro (Blu-ray + DVD) - La mejor película jamás creada"
                    price = {5}
                    rating = {5}
                    image = "https://res.cloudinary.com/dj9npvnlg/image/upload/v1697660302/6123604_so_wa20bb.jpg"
            />
            <Product
                     id = "532453"
                     title = "Funko POP! Luka Doncic - El mejor jugador de baloncesto de la NBA"
                     price = {28}
                     rating = {5}
                     image = "https://res.cloudinary.com/dj9npvnlg/image/upload/v1697660430/funko-pop-nba-luka-doncic-trading-card-pop_asonl8.jpg"
            />
            <Product
                      id = "645455"
                      title = "ALCHEMY: Dire Straits Live - El mejor disco de la historia de la música"
                      price = {20}
                      rating = {5}
                      image = "https://res.cloudinary.com/dj9npvnlg/image/upload/v1697660641/17693_r3bsu2.jpg"
            />
            </div>

            <div className="home_row">
            <Product
                       id = "5453225234453"
                       title = "The Legend of Zelda: Majora's Mask - El mejor videojuego de todos"
                       price = {50}
                       rating = {5}
                       image = "https://res.cloudinary.com/dj9npvnlg/image/upload/v1697660862/D_NQ_NP_735147-MLA53489035167_012023-O_py6bqp.webp"
            />
            </div>
         </div>
         </div>
    </div>
  )
}

export default Home