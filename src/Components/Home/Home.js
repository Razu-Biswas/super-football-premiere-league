import React, { useState, useEffect} from 'react';
import Team from '../Team/Team.js';
import './Home.css';


const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams));
    }, [])
    return (
        <div className="home-main">
            <div className="home-image">
                <h1 className="title">Super   Football Premier League (SFPL)</h1>
                
            </div>
            <div className="home-teams">
                {
                    teams.map( team => <Team team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Home;