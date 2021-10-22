import './HomePage.css'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import person1 from './Images/person1.png'
import person2 from './Images/person2.png'
function HomePage() {
    return (
        <>
        <div className="whole">
            <div className="left_components">
                <h1 id="left_heading">We Manufactured <br/> Opportunity</h1>
                <br/>
                <p>Globack is modernizing the way black people to gain
                    access to opportunity and resources.
                </p>
                <br/>
                <Link to="/mission" id="link_button">
                <Button variant="outline-primary" className="button"><span id="button_text">Join Our Waitlist</span>
                    <span id="show_before"> &#8594;</span> 
                    <span id="show_after">  &#8599;</span>
                </Button>
                </Link>
            </div>
            <div className="right_components">
                    <div class="container">
                        <div className="shape"></div>
                        <div className="shape2"></div>
                        <div className="shape3"></div>
                        <div className="shape4"></div>
                        <div className="shape5"></div>
                        
                        

                    </div>
                    
                    <div className="outerShape"></div>
                    <div className="outerShape2"></div>

                    <div className="shape_image_class">
                        <img  id="shape_image_id" src={person1} alt="Person1 here"></img>                        
                    </div>
                    <img  id="shape_image_id2" src={person2} alt="Person1 here"></img>
            </div>
        </div>
        </>
    )
}

export default HomePage
