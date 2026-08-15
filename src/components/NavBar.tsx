

function NavBar() {

    return (
        <section id="navBar">
            <div id="navBarLeft">
                <div id="logoContainer">
                    <p id="logo">Bandage</p>
                </div>

                <div id="navContents">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Pages</a></li>
                    </ul>
                </div>
            </div>
            
            <div id="navBarRight">
                <div id="registerCont">
                    {/* icon */}
                    <p id="navText">Login / Register</p>
                </div>

                <div id="otherIconCont">
                    <div id="searchCont">
                        {/* add search icon */}
                    </div>
                    <div id="searchCont">
                        {/* add cart icon */}
                        <p id="otherIconText">1</p>
                    </div>
                    <div id="searchCont">
                        {/* add love icon */}
                        <p id="otherIconText">1</p>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default NavBar