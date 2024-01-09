import React from "react";
import './styles.css';
import avatar from '../../assets/images/Avatar.png'
import MainPhoto from '../../assets/images/MainPhoto.png'
import FaceBoockLinks from '../../assets/images/FaceBoockLinks.png'
import InstagramLinks from '../../assets/images/InstagramLinks.png'
import TiktokLinks from '../../assets/images/TiktokLinks.png'
import YoutubeLinks from '../../assets/images/YoutubeLinks.png'


const MainBlock = () => {
    return (
        <div className="mainBlock" id="main">
            <div className="leftBlock">
                <div className="leftBlockContent">
                    <img src={avatar} width={200} height={200} />
                    <h1>Engleza cu Snow</h1>
                    <p>Profesoară de 14 ani cu peste 1 000 de<br/> studenți care deja vorbesc engleză cu<br/> mine și susțin examene internaționale și<br/> naționale.</p>
                    <a href="#courses"><button className="mainButton"><p>Despre lecții</p></button></a>
                </div>
            </div>
            <div className="rightBlock">
                <div className="rightContent">
                <img src={MainPhoto} width={760} height={1000}/>
                    <div className="webLinKs">
                        <a href="https://www.facebook.com/people/Engleza-cu-Snow/100089484220418/" target="_blank"><img src={FaceBoockLinks} width={50} height={50}/></a>
                        <a href="https://www.instagram.com/engleza_cu_snow/" target="_blank"><img src={InstagramLinks} width={50} height={50}/></a>
                        <a href="https://www.tiktok.com/@engleza_cu_snow" target="_blank"><img src={TiktokLinks} width={50} height={50}/></a>
                        <a href="https://www.youtube.com/channel/UCgxXVAjWnAXg-BpXZbF9b_A" target="_blank"><img src={YoutubeLinks} width={50} height={50}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainBlock