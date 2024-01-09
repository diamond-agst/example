import React from "react";
import './styles.css';
import ExpereanceSnowPhoto from '../../assets/images/ExpereanceSnowPhoto.png'
import ExpereanceSmartPhoto from '../../assets/images/ExpereanceSmartPhoto.png'
import ExpereanceNextPhoto from '../../assets/images/ExpereanceNextPhoto.png'
import ExpereancePuskinPhoto from '../../assets/images/ExpereancePuskinPhoto.png'
import ExpereanceFantasticPhoto from '../../assets/images/ExpereanceFantasticPhoto.png'
import ExpereanceOratoricaPhoto from '../../assets/images/ExpereanceOratoricaPhoto.png'
import ExpereanceRitaPhoto from '../../assets/images/ExpereanceRitaPhoto.png'
import ExpereanceLine from '../../assets/images/ExpereanceLine.png'

const ExpereanceBlock = () => {
    return(
        <div className="expereanceBlock">
            <div className="expereanceLeftBlock">

                <img src={ExpereanceSnowPhoto} width={500} height={500}/>

            </div>
            <div className="expereanceRightBlock">
                <div className="expereanceRightContent">
                    <div className="expereanceRightContentColum">
                        <div className="expereanceRightTitle"><h1>Experiență</h1></div>
                        <img src={ExpereanceLine}/>
                        <div className="expereanceRightContentRow"><img src={ExpereanceSmartPhoto} width={50} height={50}/> <p>Smart Start Kids Academy <br/> <span className="bold">EFL Teacher</span></p></div>
                        <div className="expereanceRightContentRow"><img src={ExpereanceNextPhoto} width={50} height={50}/> <p>Next Language Centre  <br/> <span className="bold">ESL Teacher</span></p></div>
                        <div className="expereanceRightContentRow"><img src={ExpereancePuskinPhoto} width={50} height={50}/> <p>IPLT «A. Puskin» <br/> <span className="bold">English Teacher</span></p></div>
                        <div className="expereanceRightContentRow"><img src={ExpereanceFantasticPhoto} width={50} height={50}/> <p>Fantastic English  <br/> <span className="bold">TOEFL ibt / FCE Instructor</span></p></div>
                        <div className="expereanceRightContentRow"><img src={ExpereanceFantasticPhoto} width={50} height={50}/> <p>Fantastic English  <br/> <span className="bold">Head of International Exams Department</span></p></div>
                        <div className="expereanceRightContentRow"><img src={ExpereanceRitaPhoto} width={50} height={50}/> <p>Rita Engleza <br/> <span className="bold">Online Courses Lead Methodologist</span></p></div>
                        <div className="expereanceRightContentRow"><img src={ExpereanceOratoricaPhoto} width={50} height={50}/> <p>Oratorica  <br/> <span className="bold">ESL Teacher / BAC Instructor</span></p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpereanceBlock;