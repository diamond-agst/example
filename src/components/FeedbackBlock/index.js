import './styles.css'
import recenziiSnowPhoto from "../../assets/images/recenziiSnowPhoto.png"
import Carousel from '../Carousel'
const FeedbackBlock = () => {
    return(
        <div className="feedbackBlock">
            <div className="feedbackLeftBlock">
                <div className="imageBlock">
                    <img src={recenziiSnowPhoto}/>
                    <div className="imageBlockText">
                        <p>Peste 1 000 de studenți care <br/> deja vorbesc engleză  cu mine<br/> si sute de recenzii</p>
                    </div>
                </div>
            </div>
            <div className="feedbackRightBlock">
            <Carousel/>
            </div>
        </div>
    )
}
export default FeedbackBlock;