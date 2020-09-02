import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CountryDetails = () => {    
    const {countryKey} = useParams();

    const [countryDetails, setCountryDetails] = useState({});

    const {name, capital, population} = countryDetails;
    // const [borders, currencies] = countryDetails;
    console.log(countryDetails)

    useEffect(() => {
        const url = (`https://restcountries.eu/rest/v2/callingcode/${countryKey}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setCountryDetails(data[0]))
    }, [])

    return (
        <Container>
            <Row>
                <Col>                    
                    <div className="country-details">
                        <h1>Country Details:</h1>
                        <h3>Name: {name}</h3>
                        <h5>Capital: {capital}</h5>
                        <h6>Population: {population}</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CountryDetails;