import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kids from "../images/kids2.png"
import teens from "../images/teens2.png"
import promo from "../images/MatriculasAbiertas.png"
import toefl from "../images/TOEFL_ITP.png"
import two from "../images/two.png"
import atm from "../images/atm.jpg"
import "./Home.css"
import Footer from "../components/Footer";

const images = [
    promo,
    toefl,
    atm,
    kids,
    teens,
    two
];

function Home(){
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return(
        <>
            <div className="container">
                <div className="home-slider">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt="" className="slider-img"/>
                        ))}
                    </Slider>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;