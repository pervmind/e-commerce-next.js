/* eslint-disable @next/next/no-img-element */
export default function NavBar(){

    return(
        <div className="nav">
            <div className="brand">
                <img src="samurai white.ico" alt="logo" className="logo"></img>
                <h1>Katana Store</h1>
            </div>
            <div className="navContainer">
                <ul>
                    <li className="navElement">Katanas</li>
                    <li className="navElement">About</li>
                </ul>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}