import React from "react";
import './styles.css'
import footerFaceboockPhoto from '../../assets/images/footerFacebookPhoto.png'
import footerInstagramPhoto from '../../assets/images/footerInstagramPhoto.png'
import footerTiktokPhoto from '../../assets/images/footerTiktokPhoto.png'
import footerYoutubePhoto from '../../assets/images/footerYoutubePhoto.png'
import footerButtonPhoto from '../../assets/images/footerButtonPhoto.png'

const Footer = () => {
    return(
        <div className="footerBlock">
            <div className="topFooterBlock">
                <div className="leftFooterLinks">
                    <a href="https://www.facebook.com/people/Engleza-cu-Snow/100089484220418/" target="_blank"><img src={footerFaceboockPhoto} width={25} height={25}/></a>  
                    <a href="https://www.instagram.com/engleza_cu_snow/" target="_blank"><img src={footerInstagramPhoto} width={25} height={25}/></a>
                </div>
                <div className="centerFooterButton">
                    <a href="#main"><img src={footerButtonPhoto} width={40} height={40}/></a>
                </div>
                <div className="rightFooterLinks">
                    <a href="https://www.tiktok.com/@engleza_cu_snow" target="_blank"><img src={footerTiktokPhoto} width={25} height={25}/></a>
                    <a href="https://www.youtube.com/channel/UCgxXVAjWnAXg-BpXZbF9b_A" target="_blank"><img src={footerYoutubePhoto} width={25} height={25}/></a>
                </div>
            </div>
            <div className="bottomFooterBlock">
                <p>© 2024 Snow. Toate drepturile rezervate.</p>
            </div>
        </div>
    )
}
export default Footer; 