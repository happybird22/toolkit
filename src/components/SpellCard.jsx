import { Link } from 'react-router-dom';

function SpellCard({ spell, isFavorite, onToggleFavorite }) {
    return (
        <li className='spell-card'>
            <Link to={`/spells/${spell.slug}`} className="spell-info">
                <h3>{spell.name}</h3>
                <p><strong>Level:</strong>{spell.level}</p>
            </Link>

            <button onClick={() => onToggleFavorite(spell)}>
                {isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>


        </li>
    );
}

export default SpellCard;