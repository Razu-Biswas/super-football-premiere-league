import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Team = (props) => {

    const {idTeam, strTeam, strTeamBadge, strCountry, strSport } = props.team;


    return (
        <div className="single-team">
            <img className="team-image" src ={strTeamBadge} alt="" ></img>
            <h4>{strTeam}</h4>
            <h6>{strSport}</h6>
            <h6>{strCountry}</h6>
            {/* <Link to ={`/teamExplore/${idTeam}`} >TeamExplore</Link> */}


            <p><Link to ={`/teamExplore/${idTeam}`} >
            <button  type="button" class="btn btn-danger">Team Explore <FontAwesomeIcon icon ={faArrowRight}/></button></Link></p>

        </div>
        
    );
};

export default Team;