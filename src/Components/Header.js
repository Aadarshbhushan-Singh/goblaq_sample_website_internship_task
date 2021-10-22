import {Button} from 'react-bootstrap'
import logo from './Images/Goblaq_logo.jpg'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div id="header">
            <img src={logo} alt="Logo here" id="logo_image"></img>
        <Link to="/form" id="form_button">
            <Button variant="outline-primary" id="waitlist_button">Join our waitlist</Button>
        </Link>

            
        </div>
    )
}

export default Header
