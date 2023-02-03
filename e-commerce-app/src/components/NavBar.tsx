/* eslint-disable @next/next/no-img-element */
export default function NavBar(){
    const displayNavMenu = ()=>{
        const list = document.getElementById("navList") as HTMLElement;
        if(list.style.left === "0%"){
            list.style.left = "-100%";
        }else{
            list.style.left = "0%";
        }
    }
    return(
        <div className="nav">
            <img src="/icons8-menu.svg" onClick={displayNavMenu} alt="nav menu" className="navMenu"/>
            <a href="/">
                <div className="brand">
                    <img src="/samurai white.ico" alt="logo" className="logo" />
                    <h1>刀屋 Katana Store</h1>
                </div>
            </a>
            <div className="navContainer">
                <ul style={{left: '-100%' }} id="navList" >
                    <a href="/collection/">
                        <li className="navElement">Katanas</li>
                    </a>
                    <a href="/about/">
                        <li className="navElement">About</li>
                    </a>
                </ul>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}