import ProfileImage from '../assets/profile-image.png'
import StarIconF from '../assets/icon-star-filled.svg'
import StarIconO from '../assets/icon-star-outlined.svg'
import TestimonialImgi from '../assets/unsplash_0y8p69vwIYM.png'
import TestimonialImgii from '../assets/unsplash_1R1ecHV4i0Y.png'
import TestimonialImgiii from '../assets/unsplash_6_dx4H4yi1Y.png'
import TestimonialImgiv from '../assets/unsplash_GHztzvLLOdQ.png'
import TestimonialImgv from '../assets/unsplash_QLGA5Zv3doo.png'
import TestimonialImgvi from '../assets/unsplash_UUTOuXqaExk.png'
import TestimonialImgvii from '../assets/unsplash_ah7yIXWrtKs.png'
import TestimonialImgviii from '../assets/unsplash_jo40QKbxUP0.png'
import TestimonialImgix from '../assets/unsplash_rhn8ff1G_QY.png'

function Testimonial() {
    return (
        <section id="testimonial">
            <div id="testimonialLeft">
                <h3>What they say about us</h3>

                <div id="testimonialLeftCont">
                    <img className="profileImg" src={ProfileImage} alt="" />

                    <div id="starCont">
                        <img className="iconImage" src={StarIconF} alt="" />
                        <img className="iconImage" src={StarIconF} alt="" />
                        <img className="iconImage" src={StarIconF} alt="" />
                        <img className="iconImage" src={StarIconO} alt="" />
                    </div>

                    <h6>Slate helps you see how many more days you need to work to reach your financial goal.</h6>

                    <div id="testimonaialNameCont">
                        <p id="blue">Regina Miles</p>
                        <h6>Designer</h6>
                    </div>
                </div>

            </div>

            <div id="testimonialRight">
                <div id="testimonialImgCont">
                    <img className="testimonialImage" src={TestimonialImgi} alt="" />
                    <img className="testimonialImage" src={TestimonialImgii} alt="" />
                    <img className="testimonialImage" src={TestimonialImgiii} alt="" />
                </div>

                <div id="testimonialImgCont">
                    <img className="testimonialImage" src={TestimonialImgiv} alt="" />
                    <img className="testimonialImage" src={TestimonialImgv} alt="" />
                    <img className="testimonialImage" src={TestimonialImgvi} alt="" />
                </div>

                <div id="testimonialImgCont">
                    <img className="testimonialImage" src={TestimonialImgvii} alt="" />
                    <img className="testimonialImage" src={TestimonialImgviii} alt="" />
                    <img className="testimonialImage" src={TestimonialImgix} alt="" />
                </div>
            </div>

        </section>
    )
}

export default Testimonial