import PhoneIcon from '../assets/phone-icon.svg?react'
import EmailIcon from '../assets/email-icon.svg?react'
import InstagramIcon from '../assets/instagram-icon.svg?react'
import YoutubeIcon from '../assets/youtube-icon.svg?react'
import FacebookIcon from '../assets/facebook-icon.svg?react'
import TwitterIcon from '../assets/twitter-icon.svg?react'

function TopBar() {

    return (
        <section id="topBarContainer">
            <div id="topBarLeft">
                <div id="numberContainer">
                    <PhoneIcon className="icon" />
                    <p id="iconText">(225) 555-0118</p>
                </div>

                <div id="numberContainer">
                    <EmailIcon className="icon" />
                    <p id="iconText">michelle.rivera@example.com</p>
                </div>
            </div>

            <div id="topBarCenter">
                <p id="iconText">Follow Us  and get a chance to win 80% off</p>
            </div>

            <div id="topBarRight">
                <p id="iconText">Follow Us  :</p>
                <div id="socialIconCont">
                    <InstagramIcon className="socialIcon" />
                    <YoutubeIcon className="socialIcon" />
                    <FacebookIcon className="socialIcon" />
                    <TwitterIcon className="socialIcon" />
                </div>
            </div>

        </section>
    )
}

export default TopBar
