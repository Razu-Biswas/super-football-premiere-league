import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MaleImage from '../../images/Photo/male.png';
import FeMaleImage from '../../images/Photo/female.png';
import './TeamExplore.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faFlag, faMarsStroke, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaYoutube, FaTwitterSquare, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const TeamExplore = () => {
    const { id } = useParams();
    const [teamExplore, setTeamExplore] = useState({});
    const { strTeamBadge, strTeam, intFormedYear, strSport, strGender, strCountry, strDescriptionEN, strStadiumDescription, strFacebook, strTwitter, strYoutube } = teamExplore;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamExplore(data.teams[0]));
    }, [id])
    return (

        <div class="align-item-center bg-dark">
            <div className="logo-details">
                <img src={strTeamBadge} alt="" />
                
            </div>

            <Container className="card-style justify-content center container-class">
                <div class="card mb-3 bg-primary" style={{ maxWidth: '1040px' }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Name : {strTeam}</h5>
                                <p class="card-text"> <FontAwesomeIcon icon={faMapMarkerAlt} /> Founder : {intFormedYear}</p>
                                <p> <FontAwesomeIcon icon={faFutbol} /> Sport Type : {strSport}</p>
                                <p> <FontAwesomeIcon icon={faMarsStroke} /> Gender : {strGender}</p>
                                <p> <FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</p>
                            </div>
                        </div>
                        <div class="col-md-4 img-cover">
                            <img className='img-fluid' src={strGender === 'Male' ? MaleImage : FeMaleImage} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <p style={{ color: 'white' }}>{strDescriptionEN}</p>
                    <br />
                    <p style={{ color: 'white' }}>{strStadiumDescription}</p>
                </div>
            </Container>

            <footer className="col-md-12 d-flex justify-content-center footer-design">
                <Link to="/"><FaHome></FaHome></Link>
                <a target="_blank" href={`https://${strFacebook}`} rel="noreferrer">
                    <FaFacebook></FaFacebook> </a>
                <a target="_blank" href={`https://${strTwitter}`} rel="noreferrer"> <FaTwitterSquare></FaTwitterSquare>
                </a>
                <a target="_blank" href={`https://${strYoutube}`} rel="noreferrer"><FaYoutube></FaYoutube>
                </a>
            </footer>
        </div>

    );

};

export default TeamExplore;

