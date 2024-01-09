import React, { useState } from "react";
import './styles.css';
import CoursesButton from '../../assets/images/CoursesButton.png'
import B1_B2Photo from '../../assets/images/B1.B2Photo.png'
const CoursesB1_B2 = () =>{
    const [value, setValue] = useState(0);
    const showcourse = () => {
        switch(value){
            case (0):
                return(
                   <div className="B1_B2infoCoursesBlock">
                        <img src={B1_B2Photo}/>
                        <div className="B1_B2ContentBlock">
                            <div className="B1_B2Title">
                                <p>B1.1</p>
                            </div>
                            <div className="B1_B2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )
            break;
            case (1):
                return(
                    <div className="B1_B2infoCoursesBlock">
                        <img src={B1_B2Photo}/>
                        <div className="B1_B2ContentBlock">
                            <div className="B1_B2Title">
                                <p>B1.2</p>
                            </div>
                            <div className="B1_B2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )
            break;    
            case(2):
                return(
                    <div className="B1_B2infoCoursesBlock">
                       <img src={B1_B2Photo}/>
                        <div className="B1_B2ContentBlock">
                            <div className="B1_B2Title">
                                <p>B2.1</p>
                            </div>
                            <div className="B1_B2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )
            break;
            case(3):
                return(
                    <div className="B1_B2infoCoursesBlock">
                        <img src={B1_B2Photo}/>
                        <div className="B1_B2ContentBlock">
                            <div className="B1_B2Title">
                                <p>B2.2</p>
                            </div>
                            <div className="B1_B2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )
            break;
        }
    }
    return(
        <div className="B1_B2Block">
            <div className="B1_B2wrapper">
            <div className="B1_B2titleBlock">
                <p>Cursurile <span className="B1_B2">B1-B2</span></p>
            </div>
            <div className="B1_B2coursesBlock">
                <div className="B1_B2YelowTicket">
                    <h2>Cursul</h2>
                    <p>A1.1</p>
                    <p>DURATA: 21 de zile</p>
                    <p>3 150 MDL / 160 EUR</p>
                    <button className="B1_B2ButtonWhite">MAKE OFFER</button>
                    <button className="B1_B2ButtonMore" onClick={() => setValue(0)}><img src={CoursesButton} style={value == 0 ? {transform:'rotate(180deg)'} : null}/></button>
                </div>
                <div className="B1_B2WhiteTicket">
                    <h2>Cursul</h2>
                    <p>A1.1</p>
                    <p>DURATA: 21 de zile</p>
                    <p>3 150 MDL / 160 EUR</p>
                    <button className="B1_B2ButtonPink">MAKE OFFER</button>
                    <button className="B1_B2ButtonMore" onClick={() => setValue(1)}><img src={CoursesButton} style={value == 1 ? {transform:'rotate(180deg)'} : null}/></button>
                </div>
                <div className="B1_B2YelowTicket">
                    <h2>Cursul</h2>
                    <p>A1.1</p>
                    <p>DURATA: 21 de zile</p>
                    <p>3 150 MDL / 160 EUR</p>
                    <button className="B1_B2ButtonWhite">MAKE OFFER</button>
                    <button className="B1_B2ButtonMore" onClick={() => setValue(2)}><img src={CoursesButton} style={value == 2 ? {transform:'rotate(180deg)'} : null}/></button>
                </div>
                <div className="B1_B2WhiteTicket">
                    <h2>Cursul</h2>
                    <p>A1.1</p>
                    <p>DURATA: 21 de zile</p>
                    <p>3 150 MDL / 160 EUR</p>
                    <button className="B1_B2ButtonPink">MAKE OFFER</button>
                    <button className="B1_B2ButtonMore" onClick={() => setValue(3)}><img src={CoursesButton} style={value == 3 ? {transform:'rotate(180deg)'} : null}/></button>
                </div>
            </div>
        {showcourse()}
        </div>
    </div>
    )
}
export default CoursesB1_B2