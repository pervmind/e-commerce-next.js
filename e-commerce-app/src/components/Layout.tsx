import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

export default function Layout({children }: React.PropsWithChildren<{}>){
    return(
        <div className="pageContainer">
            <NavBar />
            <main className="layoutContainer">
                {children}
            </main>
            <Footer />
            <div className="clearfix"></div>
        </div>
    )
}