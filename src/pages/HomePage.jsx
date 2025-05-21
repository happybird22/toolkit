import Header from '../components/Header';
import SpellLibraryBtn from '../components/SpellLibraryBtn';
import CombatTrackerBtn from '../components/CombatTrackerBtn';

export default function HomePage() {

    return (
        <div className='home-page'>
            <Header>
                <SpellLibraryBtn />
                <CombatTrackerBtn />
            </Header>

            <main className='home-main'>
                <h1 className='page-title'>Greetings Adventurer's!</h1>
                <p className='intro-text'>
                    Presented by <strong>Dungeons Not Dating</strong> this toolkit is your trusty companion to all things Dungeons and Dragons. Manage Spells, track combat, and keep your party organized - all in one place! More new and excited features will be coming your way as we grow so stick around to see what tools get added next!
                </p>

                <div className='feature-cards'>
                    <div className='feature-card'>
                        <h2>📖 Spell Library</h2>
                        <p>Browse and save spells from the 5e opensource SRD. Perfect for quick references and session prep.</p>
                        <SpellLibraryBtn />
                    </div>

                    <div className='feature-card'>
                        <h2>⚔️ Combat Tracker</h2>
                        <p>Keep track of initiative and HP for each party member or enemy. Great for both DM's and players who like to be on the ready for their next turn.</p>
                        <CombatTrackerBtn />
                    </div>
                </div>

                <footer className='footer'>
                    <p>Built with ❤️ for tabletop gamers everywhere!</p>
                </footer>
            </main>
        </div>
    );
}
