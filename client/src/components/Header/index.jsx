import React from "react"

const Header = () => {

    return (
        <>
            <nav className="navBar">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <h1>Google Books</h1>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"><button>Home</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved"><button>SavedBooks</button></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;