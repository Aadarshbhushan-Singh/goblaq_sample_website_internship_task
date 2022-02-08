import './Form.css'
import Button from 'react-bootstrap/Button'

function Form() {
    return (
        <div className="whole_form">
            <div className="left_content">
                <h1>Join Our  <br/>Waitlist</h1>
                <p>Please enter your information and we'll send you
                    an invite once our beta is ready!</p>
            </div>
            <div className="right_content">
            <form className="form">
                <input type="text" placeholder="Your Name" /> <br />
                <input type="email" name="email" id="email" placeholder="Your Email" /> <br />
                <select name="select" id="select">
                    <option value="Developer">
                        I am a Developer.
                    </option>
                    <option value="Engineer">
                        I am a Engineer.
                    </option>
                </select> <br />
                <input type="text" name="website" id="website" placeholder="website or socials" />
                <Button variant="outline-primary" className="button_form button"><span id="button_text">Join Our Waitlist</span>
                    <span id="show_before"> &#8594;</span> 
                    <span id="show_after">  &#8599;</span>
                </Button>
            </form>
            </div>
        </div>
    )
}

export default Form
