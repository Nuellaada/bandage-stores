import EasyIcon from '../assets/book-reader.svg'
import ConcreteIcon from '../assets/carbon_book.svg'
import GrowthIcon from '../assets/arrow-growth.svg'

function BestServices() {
    return (
        <section id="bestServices">
            <div id="productHeadingCont">
                <h4 id="gray">Featured Products</h4>
                <h3>THE BEST SERVICES</h3>
                <p id="paragraph">Problems trying to resolve the conflict between </p>
            </div>

            <div id="productCardCont">
                <div id="productCard">
                    <img src={EasyIcon} alt="" className="productIcon" />
                    <h3>Easy Wins</h3>
                    <p id="paragraph">Get your best looking smile now!</p>
                </div>

                <div id="productCard">
                    <img src={ConcreteIcon} alt="" className="productIcon" />
                    <h3>Concrete</h3>
                    <p id="paragraph">Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>

                <div id="productCard">
                    <img src={GrowthIcon} alt="" className="productIcon" />
                    <h3>Hack Growth</h3>
                    <p id="paragraph">Overcame any hurdle or any other problem.</p>
                </div>
            </div>

        </section>
    )
}

export default BestServices