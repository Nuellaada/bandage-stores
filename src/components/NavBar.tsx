import RegisterIcon from '../assets/register-icon.svg'
import SearchIcon from '../assets/search-icon.svg'
import CartIcon from '../assets/cart-icon.svg'
import LoveIcon from '../assets/love-icon.svg'

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
                    <img src={RegisterIcon} alt="" className="iconImg" />
                    <p id="link">Login / Register</p>
                </div>

                <div id="otherIconCont">
                    <div id="searchCont">
                        <img src={SearchIcon} alt="" className="iconImg" />
                    </div>
                    <div id="searchCont">
                        <img src={CartIcon} alt="" className="iconImg" />
                        <p id="link">1</p>
                    </div>
                    <div id="searchCont">
                        <img src={LoveIcon} alt="" className="iconImg" />
                        <p id="link">1</p>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default NavBar