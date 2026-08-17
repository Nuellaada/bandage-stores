import FPCardImageOne from '../assets/fp-product-card1.png'
import FPCardImageTwo from '../assets/fp-product-card2.png'
import FPCardImageThree from '../assets/fp-product-card3.png'
import NextArrowIcon from '../assets/icon-arrow-next.svg'
import ClockIcon from '../assets/icons-calendar.svg'
import ChartIcon from '../assets/icon-chart.svg'

function FeaturedPosts() {
    return (
        <section id="featuredPosts">
            <div id="fpHeadingCont">
                <h6 id="blue">Practice Advice</h6>
                <h3>Featured Posts</h3>
            </div>

            <div id="fpCardCont">
                <div id="fpCard">
                    <div id="fpCardBackground">
                        <img className="fpCardImg" src={FPCardImageOne} alt="" />
                    </div>

                    <div id="fpCardOther">
                        <div id="fpCaption">
                           <p className="small blue">Google</p>
                           <p className="small">Trending</p> 
                           <p className="small">New</p>
                        </div>

                        <h4>Loudest à la Madison #1 (L'integral)</h4>

                        <p id="paragraph">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

                        <div id="fpCardContainer">
                            <div id="fpDate">
                                <img className="iconImg" src={ClockIcon} alt="" />
                                <p id="small">22 April 2021</p>
                            </div>

                            <div id="fpDate">
                                <img className="iconImg" src={ChartIcon} alt="" />
                                <p id="small">10 comments</p>
                            </div>
                        </div>

                        <div id="fpCardButtonCont">
                            <h6>Learn More</h6>
                            <img className="iconImg" src={NextArrowIcon} alt="" />
                        </div>
                    </div>
                    
                </div>

                <div id="fpCard">
                    <div id="fpCardBackground">
                        <img className="fpCardImg" src={FPCardImageTwo} alt="" />
                    </div>

                    <div id="fpCardOther">
                        <div id="fpCaption">
                            <p className="small blue">Google</p>
                            <p className="small">Trending</p> 
                            <p className="small">New</p>
                        </div>

                        <h4>Loudest à la Madison #1 (L'integral)</h4>

                        <p id="paragraph">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

                        <div id="fpCardContainer">
                            <div id="fpDate">
                                <img className="iconImg" src={ClockIcon} alt="" />
                                <p id="small">22 April 2021</p>
                            </div>

                            <div id="fpDate">
                                <img className="iconImg" src={ChartIcon} alt="" />
                                <p id="small">10 comments</p>
                            </div>
                        </div>

                        <div id="fpCardButtonCont">
                            <h6>Learn More</h6>
                            <img className="iconImg" src={NextArrowIcon} alt="" />
                        </div>
                    </div>
                    
                </div>

                <div id="fpCard">
                    <div id="fpCardBackground">
                        <img className="fpCardImg" src={FPCardImageThree} alt="" />
                    </div>

                    <div id="fpCardOther">
                        <div id="fpCaption">
                            <p className="small blue">Google</p>
                            <p className="small">Trending</p> 
                            <p className="small">New</p>
                        </div>

                        <h4>Loudest à la Madison #1 (L'integral)</h4>

                        <p id="paragraph">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

                        <div id="fpCardContainer">
                            <div id="fpDate">
                                <img className="iconImg" src={ClockIcon} alt="" />
                                <p id="small">22 April 2021</p>
                            </div>

                            <div id="fpDate">
                                <img className="iconImg" src={ChartIcon} alt="" />
                                <p id="small">10 comments</p>
                            </div>
                        </div>

                        <div id="fpCardButtonCont">
                            <h6>Learn More</h6>
                            <img className="iconImg" src={NextArrowIcon} alt="" />
                        </div>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}

export default FeaturedPosts