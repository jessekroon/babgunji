import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/Kermit.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1>This Rocket is Launching Soon<br /> +- <strong>3...2........ <a href="https://nl.wikipedia.org/wiki/Trompet" target="_blank">!!!</a></strong>,<br /> 
                    crafted by <a href="https://www.intertoys.nl/shop/nl/intertoys/lego-duplo-stoomtrein-10874-000" target="_blank"><strong>Juurdt</strong></a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
