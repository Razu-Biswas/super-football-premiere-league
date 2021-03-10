import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MaleImage from '../../images/Photo/male.png';
import FeMaleImage from '../../images/Photo/female.png';

import './TeamExplore.css';
import{ Container } from 'react-bootstrap';
import Facebook from '../../images/Icon/Facebook.png';
import Twitter from '../../images/Icon/Twitter.png';
import YouTube from '../../images/Icon/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFutbol, faFlag, faMarsStroke, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const TeamExplore = () => {
    const { id } = useParams();
    const [teamExplore, setTeamExplore] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamExplore(data.teams[0]));
    }, [id])
    return (

        <div class="align-item-center bg-dark">
            <div className="logo-details">
                <img src={teamExplore.strTeamBadge} alt="" />
            </div>

            <Container className="card-style justify-content center">
                <div class="card mb-3 bg-primary" style={{ maxWidth: '1040px' }}>
                    <div class="row g-0">
                        
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Name : {teamExplore.strTeam}</h5>
                                <p class="card-text"> <FontAwesomeIcon icon={faMapMarkerAlt} /> Founder : {teamExplore.intFormedYear}</p>
                                <p> <FontAwesomeIcon icon={faFutbol} /> Sport Type : {teamExplore.strSport}</p>
                                <p> <FontAwesomeIcon icon={faMarsStroke} /> Gender : {teamExplore.strGender}</p>
                                <p> <FontAwesomeIcon icon={faFlag} /> Country : {teamExplore.strCountry}</p>
                            </div>
                        </div>
                        <div class="col-md-4 img-cover">
                            <img className='img-fluid' src={teamExplore.strGender === 'Male' ? MaleImage : FeMaleImage} alt="" />
                        </div>
                    </div>
                    
                 </div>
                 <div>
                   <p style={{color: 'white'}}>{teamExplore.strDescriptionEN}</p>
                   <br/>
                   <p style={{color: 'white'}}>{teamExplore.strStadiumDescription}</p>
                </div>
               </Container>
 


               <footer className="col-md-12 d-flex justify-content-center footer-design">
                    {/* <img src={Facebook} alt=""/>
                    <img src={Twitter} alt=""/>
                    <img src={YouTube} alt=""/> */}
                    <a target="_blank" href={`https://${teamExplore.strFacebook}`} rel="noreferrer">
                     <img src={Facebook} alt="" /> </a>
                     <a target="_blank" href={`https://${teamExplore.strTwitter}`} rel="noreferrer">
                     <img src={Twitter} alt="" /> </a>
                     <a target="_blank" href={`https://${teamExplore.strYoutube}`} rel="noreferrer">
                     <img src={YouTube} alt="" /> </a>
               </footer>
        </div>

    );

};

export default TeamExplore;

