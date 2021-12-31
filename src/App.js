import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import HomePage from './Components/HomePage'
import MissionPage from './Components/MissionPage'
import Form from './Components/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
        <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/goblaq_sample_website_internship_task">
            <HomePage/>
          </Route>
          <Route exact path="/mission">
            <MissionPage/>
          </Route>
          <Route exact path="/form">
            <Form/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
