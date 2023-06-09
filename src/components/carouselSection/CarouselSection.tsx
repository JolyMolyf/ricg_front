import './carosuelSection.scss'
import Slider from "react-slick";
import { slides } from './slides';
import CustomCarouselArrow from './CustomCarouselArrow';

interface ICarosuelProps {
    title: string;
}

const CarouselSection = (props:ICarosuelProps) => {
    const { title } = props;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
        nextArrow: <CustomCarouselArrow/>,
        prevArrow: <CustomCarouselArrow reverse={true} />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 1,
                rows: 1
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
              }
            }
          ]
    };


    return(
        <div className="carouselSection">
            <p className="carouselSection-title blueSecondaryHeader">{title}</p>
            <Slider {...settings}>
               {slides.map((slide, index) => {
                return (
                   <div className='carouselSection-slide'>
                        <div className='carouselSection-slide-text'>
                            {slide.title}
                        </div>
                        <img src={slide.imageUrl}></img>
                   </div>
                )
               })}
            </Slider>
        </div>
    )
}

export default CarouselSection;