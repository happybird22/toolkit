import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HomeBtn from '../components/HomeBtn';
import SpellLibraryBtn from '../components/SpellLibraryBtn';

function SpellDetailPage() {
    const { slug } = useParams();
    const [spell, setSpell] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSpell = async () => {
            try {
                const response = await fetch(`https://api.open5e.com/spells/${slug}/`);
                if (!response.ok) throw new Error('Spell not found');
                const data = await response.json();
                setSpell(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchSpell();
    }, [slug]);

    if (error) return <p>Error: {error}</p>;
    if (!spell) return <p>Loading spell...</p>;

    return (
        <div className='spell-detail-page'>
            <Header>
                <HomeBtn />
                <SpellLibraryBtn />
            </Header>
            <Link to="/" className='back-link'>Back to Spell Library</Link>
            <h2>{spell.name}</h2>
            <p><strong>Level:</strong> {spell.level}</p>
            <p><strong>School:</strong> {spell.school}</p>
            <p><strong>Casting Time:</strong> {spell.casting_time}</p>
            <p><strong>Range:</strong> {spell.range}</p>
            <p><strong>Duration:</strong> {spell.duration}</p>
            <p><strong>Components:</strong> {spell.components}</p>
            <p><strong>Description:</strong> {spell.desc}</p>
            {spell.higher_level && (
                <p><strong>At Higher Levels:</strong> {spell.higher_level}</p>
            )}
            
        </div>
    );
}

export default SpellDetailPage;