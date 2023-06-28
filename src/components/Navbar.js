import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand  ${props.textlight}`} href="/" >{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link active  ${props.textlight}`} aria-current="page" href="/">{props.home}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${props.textlight} `} href="/">{props.About}</a>
                            </li>
                            <li className="nav-item ">
                            <button type="button" className={`btn ${props.textlight}`}  onClick={props.darkMode}>{props.btn} Mode</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}
// this property is used to set the property of a instance
Navbar.propTypesropTypes = {
    title: PropTypes.string,
    About : PropTypes.string,
}
// there is another concept of props which is defaultProps
// Navbar.defaultProps ={
//     title: "Set title here",
//     About: "set About here"
// }
