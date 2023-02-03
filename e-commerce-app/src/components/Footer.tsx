export default function Footer(){
    return(
        <div className="footer">
            <div className="pages">
                <h3 className="footer-header">Pages</h3>
                <ul>
                    <a href="/collection/">
                        <li className="footerLinks">Katanas</li>
                    </a>
                    <a href="/about/">
                        <li className="footerLinks">About us</li>
                    </a>
                </ul>
            </div>
            <div className="policies">
                <h3 className="footer-header">Policies</h3>
                <ul>
                    <a href="/policies/shipping-policy/">
                        <li className="footerLinks">Shipping Policy</li>
                    </a>
                    <a href="/policies/privacy-policy/">
                        <li className="footerLinks">Privacy Policy</li>
                    </a>
                    <a href="/policies/terms/">
                        <li className="footerLinks">Terms of Service</li>
                    </a>
                    <a href="/policies/refund/">
                        <li className="footerLinks">Refund Policy</li>
                    </a>
                </ul>
            </div>
            <div className="socials">
                <h3 className="footer-header">Socials</h3>
                <ul>
                    <a href="https://twitter.com/AbdullahMohm3d">
                        <li className="footerLinks">twitter</li>
                    </a>
                    <a href="https://github.com/pervmind">
                        <li className="footerLinks">github</li>
                    </a>
                    <a href="https://www.linkedin.com/in/abdullah-mohammed-964770176/">
                        <li className="footerLinks">linkedin</li>
                    </a>
                </ul>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}