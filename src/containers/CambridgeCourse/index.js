import React from "react";
import './styles.css';
import Carousel from '../../components/Carousel'

const CambridgeCourse = () =>{
    return(
        <div className="cambridgeBlock">
        <div className="titleCambridgeBlock">
            <p>Curs <span className="cambridge">CAMBRIDGE</span> </p>
        </div>
        <div className="cambridgeContentBlock">
            <div className="infoCambridgeBlock">asdnasd</div>
            <div className="cambridgeTicket_phoneBlock">
                <div className="cambridgeTicket">
                    <h2>Cursul</h2>
                    <p>A1.1</p>
                    <p>DURATA: 21 de zile</p>
                    <p>3 150 MDL / 160 EUR</p>
                    <button className="cambridgeButtonWhite">MAKE OFFER</button>
                </div>
                <Carousel/>
            </div>
        </div>
    </div>
    )
}
export default CambridgeCourse