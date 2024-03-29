import React from "react";
import './styles.css'
import gidPhoto from "../../assets/images/gidPhoto.png"

const CoursesBlock = () => {
    return(
        <div className="coursesBlock" id="courses">
            <div className="coursesTopBlock">
                <h1>Invață Engleza cu <span className="snow">Snow</span></h1>
            </div>
            <div className="coursesBottomBlock">
                <div className="course">
                    <div className="coursesRow">
                        <div className="coursesTicketYellow">
                            <div className="coursesTicketContentYellow">
                                <h2>CURSURILE</h2>
                                <p>A1 - A2</p>
                                <p>DURATA: 21 de zile</p>
                                <a href="CoursesA1_A2"><button className="coursesButtonWhite">AFLA DETALII</button></a>
                                <p>3 150 MDL / 160 EUR</p>
                            </div>
                        </div>
                        <div className="coursesTicketWhite">
                            <div className="coursesTicketContentWhite">
                                <h2>CURSURILE</h2>
                                <p>B1-B2</p>
                                <p>DURATA: 21 de zile</p>
                                <a href="CoursesB1_B2"><button className="coursesButtonPink">AFLA DETALII</button></a>
                                <p>3 600 MDL / 180 EUR</p>
                            </div>
                        </div>
                        <div className="coursesTicketYellow">
                            <div className="coursesTicketContentYellow">
                                <h2>CURSURILE</h2>
                                <p>C1-C2</p>
                                <p>DURATA: 21 de zile</p>
                                <a href="CoursesC1_C2"><button className="coursesButtonWhite">AFLA DETALII</button></a>
                                <p>3 600 MDL / 180 EUR</p>
                            </div>
                        </div>
                    </div>
                    <div className="coursesRow">
                        <div className="coursesTicketWhite">
                            <div className="coursesTicketContentWhite">
                                <h2>CURSUL</h2>
                                <p>TOEFL</p>
                                <p>DURATA: 21 de zile</p>
                                <a href="ToeflCourse"><button className="coursesButtonPink">AFLA DETALII</button></a>
                                <p>4 900 MDL / 245 EUR</p>
                            </div>
                        </div>
                        <div className="coursesTicketYellow">
                            <div className="coursesTicketContentYellow">
                                <h2>CURSUL</h2>
                                <p>Cambrdige</p>
                                <p>DURATA: 21 de zile</p>
                                <a href="CambridgeCourse"><button className="coursesButtonWhite">AFLA DETALII</button></a>
                                <p>4 900 MDL / 245 EUR</p>
                            </div>
                        </div>
                        <div className="coursesTicketWhite">
                            <div className="coursesTicketContentWhite">
                                <h2>CURSUL</h2>
                                <p>Individual</p>
                                <p>DURATA: 60 minute </p>
                                <a href="IndividualCourse"><button className="coursesButtonPink">AFLA DETALII</button></a>
                                <p>580 MDL / 30 EUR</p>
                            </div>
                        </div>
                    </div>    
                </div>   
                <div className="gidTicket">
                    <div className="gidTicketContent">
                        <img src={gidPhoto}/>
                        <p>Ghidul este în format<br/> electronic (PDF).</p>
                        <a href="TravelGuide"><button className="coursesButtonWhite">AFLA DETALII</button></a>
                        <p>29 EUR</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default CoursesBlock;