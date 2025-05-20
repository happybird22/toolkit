import React from 'react';

function SpellCard({ spell, isFavorite, onToggleFavorite }) {
    return (
        <li className='spell-card'>
            <strong>{spell.name}</strong> - ({spell.level} level)
            <button onClick={() => onToggleFavorite(spell)}>
                {isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>
        </li>
    );
}

export default SpellCard;