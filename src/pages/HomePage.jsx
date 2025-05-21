import SpellLibraryBtn from '../components/SpellLibraryBtn';
import CombatTrackerBtn from '../components/CombatTrackerBtn';

function HomePage() {

    return (
        <div className='home-page'>
            <h1 className='page-title'> Welcome to the D&D Toolkit! </h1>
            <p>
                Presented by <strong>Dungeons Not Dating</strong>, this toolkit is built to make your D&D sessions smoother and more fun. Whether you're prepping spells or managing turn order in combat, we've got you covered!
            </p>

            <div className='nav-buttons'>
                <SpellLibraryBtn />
                <CombatTrackerBtn />
            </div>
        </div>
    );
}

export default HomePage;