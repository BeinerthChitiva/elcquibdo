import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Spelling.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import spell1 from "../../images/spell1.jpg"
import spell2 from "../../images/spell2.jpg"
import spell3 from "../../images/spell3.jpg"
import spell4 from "../../images/spell4.jpg"

const images = [
    spell1,
    spell2,
    spell3,
    spell4
]

function Spelling(){

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    return(
        <>
            <HeroPages name="Spelling Bee"/>
            <div className="container">
                <div className="spell-text">
                    <h3>ELC - Spelling Bee</h3>
                    <p>
                        This past May 30th we carried out our third Institutional Spelling Bee Contest which was an amazing journey
                        having as always high-quality teachers as judges. Our attendants enjoyed every word spelled and became more
                        experienced in leading with competitions of this kind. Teachers, students, parents and people from the community
                        attended and witnessed a two-hour event in which the following students were declared champions:
                    </p>
                    <p><span>Category 1:</span> Kevin Romaña</p>
                    <p><span>Category 2:</span> Juan Sebastián Rentería</p>
                    <p><span>Category 3:</span> Adry Martínez</p>
                    <p><span>Category 4:</span> Jorge Luis Palacios</p>
                    <p>
                        We congratulate them and invite them to keep up the great work.
                        As always, we support any initiative that helps our community grow in terms of cultural and educational values
                        and diversity. We keep on fostering bilingualism in our town.
                    </p>
                </div>
                <div className="spell-slider">
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

export default Spelling;