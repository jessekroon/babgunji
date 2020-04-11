import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby";

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Captain Jazz - Ballet"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>See below, for unlikely things..</h2>
                        </header>
                        <p>After this sentence you can click on a link, but DON'T do it!!<br />zzzZZZ <a href="https://de.wikipedia.org/wiki/Schwimmbad" target="_blank">(Don't click here!)</a> ..Click the next link instead.. <a href="https://conradlin.com" target="_blank">Free Cornflakes</a></p>
                        <ul className="actions">
                            <li><a href="https://www.harekrishna.nl/" target="_blank" className="button">Jazz Ballet</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Expensive Telescopes..</h2>

                        <ul className="actions">
                            <li><Link to={`blog`} className="button">Do not Click..</Link></li>
                            <li><Link to={`subscribe`} className="button">HERE!</Link></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get in Tuts</h2>
                        <p>Dit verhaal ging over Duitse Frietjes.. Einde!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">gesmolten@fietsband.nl</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex