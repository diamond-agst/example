import React from "react";
import './styles.css';
import Carousel from '../../components/Carousel'

const ToeflCourse = () =>{
    return(
        <div className="toeflBlock">
            <div className="titleToeflBlock">
                <p>Curs <span className="TOEFL">TOEFL</span> </p>
            </div>
            <div className="toeflContentBlock">
                <div className="infoBlock">asdnasd</div>
                <div className="ticket_phoneBlock">
                    <div className="toeflTicket">
                        <h2>Cursul</h2>
                        <p>A1.1</p>
                        <p>DURATA: 21 de zile</p>
                        <p>3 150 MDL / 160 EUR</p>
                        <button className="toeflButtonWhite">MAKE OFFER</button>
                    </div>
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}
export default ToeflCourse