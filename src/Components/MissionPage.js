import './MissionPage.css'
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';
import img5 from './Images/img5.jpg';
import img6 from './Images/img6.jpg';
import img7 from './Images/img7.png';
import img8 from './Images/img8.png';
import img9 from './Images/img9.png';


function MissionPage() {
    return (
        <div>
            <div className="top_content">
                <div className="top_left">
                    <h1>Our Mission</h1>
                    <br />
                    <p>We aim to address the lack of resources and opportunity by
                        leveraging machine learning (ML) and artificial Intelligence to churn
                        through user’s data across private And public domains to produce
                        curated connections.
                    </p>
                </div>

                <div className="top_right">
                    <p>Goblaq is building a future where the black Community
                        can share meaningful resources and information
                        amongst each other.
                    </p>
                </div>
            </div>
            <div className="bottom_content">
                <div className="Images row">
                    <div className="column">
                        <img src={img1} alt="1" />
                    </div>
                    <div className="column">
                        <img src={img2} alt="1" />
                    </div>
                    <div className="column">
                        <img src={img3} alt="1" />
                    </div>
                    <div className="column">
                        <img src={img4} alt="1" />
                    </div>
                    <div className="column">
                        <img src={img5} alt="1" />
                    </div>
                    <div className="column">
                        <img src={img6} alt="1" />
                    </div>
                    <div className="column">
                        <img src={img7} alt="1" />
                    </div>
                    <div className="column">
                        <img src={img8} alt="1" />
                    </div>
                    <div className="column">
                        <img src={img9} alt="1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionPage
