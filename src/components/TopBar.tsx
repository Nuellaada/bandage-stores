import PhoneIcon from '../assets/phone-icon.svg'
import EmailIcon from '../assets/email-icon.svg'
import InstagramIcon from '../assets/instagram-icon.svg'
import YoutubeIcon from '../assets/youtube-icon.svg'
import FacebookIcon from '../assets/facebook-icon.svg'
import TwitterIcon from '../assets/twitter-icon.svg'

function TopBar() {

    return (
        <section id="topBarContainer">
            <div id="topBarLeft">
                <div id="numberContainer">
                    <img src={PhoneIcon} alt="Phone icon" className="iconImg" />
                    <h6 className="iconText">(225) 555-0118</h6>
                </div>

                <div id="numberContainer">
                    <img src={EmailIcon} className="iconImg" />
                    <h6 className="iconText">michelle.rivera@example.com</h6>
                </div>
            </div>

            <div id="topBarCenter">
                <h6 className="iconText">Follow Us  and get a chance to win 80% off</h6>
            </div>

            <div id="topBarRight">
                <h6 className="iconText">Follow Us  :</h6>
                <div id="socialIconCont">
                    <img src={InstagramIcon} alt="Instagram icon" className="iconImg" />
                    <img src={YoutubeIcon} alt="YouTube icon" className="iconImg" />
                    <img src={FacebookIcon} alt="" className="iconImg" />
                    <img src={TwitterIcon} alt="" className="iconImg" />
                </div>
            </div>

        </section>
    )
}

export default TopBar
