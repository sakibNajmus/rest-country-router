import React from 'react';
import './Country.css'
import { Link, Router, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Country = (props) => {

    const {name, flag, callingCodes, capital} = props.country;

const history = useHistory()

    const clickToKnowMore = () => {
        history.push(`/country/${callingCodes}`)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="country-details">
                    <h1 className="country-name">{name}</h1>
                    <img className="country-flag" src={flag} alt=""/>
                    <br></br>
                    <p><Link to={`/country/${callingCodes}`}>Click me to see more</Link></p>
                    
                    <button onClick={clickToKnowMore} className="main-button">Click me to see more</button>
                     </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Country;