import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/jesse.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1>This Rocket is Launching Soon<br /> ... <strong>Readyyy, Steadyyy... <a href="https://nl.wikipedia.org/wiki/Trompet" target="_blank">!!!</a></strong>,<br /> 
                    crafted by <a href="https://www.intertoys.nl/shop/nl/intertoys/lego-duplo-stoomtrein-10874-000" target="_blank"><strong>Jazzy</strong></a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
