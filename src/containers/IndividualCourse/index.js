import React from "react";
import './styles.css';
import Carousel from '../../components/Carousel'
const IndividualCourse = () =>{
    return(
        <div className="individualBlock">
        <div className="titleIndividualBlock">
            <p>Curs <span className="individual">INDIVIDUAL</span> </p>
        </div>
        <div className="individualContentBlock">
            <div className="infoIndividualBlock">asdnasd</div>
            <div className="individualTicket_phoneBlock">
                <div className="individualTicket">
                    <h2>Cursul</h2>
                    <p>A1.1</p>
                    <p>DURATA: 21 de zile</p>
                    <p>3 150 MDL / 160 EUR</p>
                    <button className="individualButtonWhite">MAKE OFFER</button>
                </div>
                <Carousel/>
            </div>
        </div>
    </div>
    )
}
export default IndividualCourse