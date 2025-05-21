import React from 'react';

function SearchBar({ search, onChange }) {
    return (
        <input
            type="text"
            placeholder='Search spells...'
            value={search}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar;