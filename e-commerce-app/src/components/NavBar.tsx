export default function NavBar(){
    return(
        <>
            <nav>
                <ul>
                    <li className="navElement">
                        <a href="/">Store</a>
                    </li>
                    <li className="navElement">
                        <a href="/collection/">Katanas</a>
                    </li>
                    <li className="navElement">
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}