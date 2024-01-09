import React from "react";
import './styles.css';
import BoockPage1 from '../../assets/images/boockPage1.png'
import BoockPage2 from '../../assets/images/boockPage2.png'
import BoockPage3 from '../../assets/images/boockPage3.png'
import BoockPage4 from '../../assets/images/boockPage4.png'
import BoockPage5 from '../../assets/images/boockPage5.png'

import Slider from "react-slick";

const TravelGuide = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <div className="TravelGuideBlock">
            <div className="TravelGuideTitleBlock">
                <p>Gid pentru <span className="calatorii">CALATORII</span></p>
            </div>
            <div className="TravelGuideContentBlock">
                <div className="TravelGuideBoockBlock">
                    <Slider {...settings}>
                        <div className="BoockPage">
                            <img src={BoockPage1}/>
                        </div>
                        <div className="BoockPage">
                            <img src={BoockPage2}/>
                        </div>
                        <div className="BoockPage">
                            <img src={BoockPage3}/>
                        </div>
                        <div className="BoockPage">
                            <img src={BoockPage4}/>
                        </div>
                        <div className="BoockPage">
                            <img src={BoockPage5}/>
                        </div>
                    </Slider>
                </div>
                <div className="TravelGuideInfoBlock">fgndflkgjn</div>
            </div>
        </div>
    )
}
export default TravelGuide