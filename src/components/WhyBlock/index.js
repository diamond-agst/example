import React from "react";
import './styles.css'
import whyBlock from "../../assets/images/whyBlock.png"

const WhyBlock = () => {
    return(
        <div className="whyBlock">
            <div className="whyBlocKContent">
                <div className="whyBlockContentText">
                    <h2>De ce sa aleci cursurile lui <span className="snow">Snow</span></h2>
                    <div className="whyBlockContentRowPink">
                        <div className="whyBlocContentTextRow">
                            <h3>Rămâi motivat</h3>
                            <li>Misiunea mea este să fac învățarea limbilor străine <br/> accesibilă tuturor</li>
                        </div>
                    </div>
                    <div className="whyBlockContentRowWhite">
                        <div className="whyBlocContentTextRow" style={{color: "black"}}>
                            <h3>Descoperă oportunitatea cu Snow</h3>
                            <li>Cursurile de engleză transformă procesul de învățare într-o experiență deschisă și prietenoasă pentru toți cei dornici să-și dezvolte abilitățile lingvistice.</li>
                           
                        </div>
                    </div>
                    <div className="whyBlockContentRowYellow">
                        <div className="whyBlocContentTextRow">
                            <h3>Rămâi inspirat cu Snow</h3>
                            <li>Cursurile de engleză sunt cheia spre reușita ta în această călătorie a cunoașterii.</li>
                        </div> 
                    </div>
                    <div className="whyBlockContentRowWhite">
                        <div className="whyBlocContentTextRow" style={{color: "black"}}>
                            <h3>Alege excelența alături de Snow</h3>
                            <li>Cursurile de engleză sunt create pentru a face învățarea limbii o călătorie captivantă și accesibilă, transformându-te în vorbitor fluent și sigur în sine.</li>
                        </div>
                    </div>
                </div>
                <img src={whyBlock}/>
            </div>
        </div>
    )
}
export default WhyBlock;