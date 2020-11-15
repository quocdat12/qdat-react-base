import React from 'react';
import ReactDOM from 'react-dom';
import Img from "./images/dog.jpg";
import "./scss/style.scss";
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faCheckSquare  } from '@fortawesome/free-solid-svg-icons';
const App = ()=>{

    return(
        <div>
            <h1>Anh Dat</h1>,
            <img className="img-fluid" src={Img}/>,
            <p>fdsfsdfsdfjfgjodfjgodfjgoidfgjofdigjo</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">dfsdfsdf</div>
                    <div className="col-md-6">fdsfsdfds</div>
                </div>
            </div>
            <FontAwesomeIcon icon={faCoffee} rotation={90} />
            <FontAwesomeIcon icon={faCheckSquare} className="highlight" />
        </div>
    )
}
ReactDOM.render(<App />,document.getElementById('root'));