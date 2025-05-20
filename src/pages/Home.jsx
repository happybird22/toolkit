import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className='home-page'>
            <h1> Welcome to the D&D Toolkit! </h1>
            <p>
                Presented by <strong>Dungeons Not Dating</strong>, this toolkit is built to make your D&D sessions smoother and more fun. Whether you're prepping spells or managing turn order in combat, we've got you covered!
            </p>

            <div className='nav-buttons'>
                <button onClick={() => navigate('/spells')}> Go to Spell Library </button>
                <button onClick={() => navigate('/combat')}> Open Combat Tracker </button>
            </div>
        </div>
    );
}

export default Home;