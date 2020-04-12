import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://theflyingphilosopher.com/" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/conradlin" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://conradlin.com/subscribe/" target="_blank" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Kermit without a permit</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
