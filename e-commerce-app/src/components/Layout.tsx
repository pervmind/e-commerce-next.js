import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

export default function Layout({children }: React.PropsWithChildren<{}>){
    return(
        <div>
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}