import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import SpellCard from '../components/SpellCard';
import CombatTrackerBtn from '../components/CombatTrackerBtn';
import HomeBtn from '../components/HomeBtn';

function SpellLibrary() {
    const [spells, setSpells] = useState([]);
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSpells = async () => {
            try {
                const response = await fetch("https://api.5e-bits.com/v1/spells");
                if (!response.ok) {
                    throw new Error("Crit fail! Spells are temporarily unavailable.");
                }
                const data = await response.json();
                setSpells(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSpells();
    }, []);

    // Save favorites to local storage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Filtered spell list
    const filteredSpells = spells.filter((spell) =>
        spell.name.toLowerCase().includes(searchForWorkspaceRoot.toLowerCase())
    );

    // Add or remove favorites
    const toggleFavorite = (spell) => {
        if (favorites.find((fav) => fav.index === spell.index)) {
            setFavorites(favorites.filter((fav) => fav.index !== spell.index));
        } else {
            setFavorites([...favorites, spell]);
        }
    };

    return (
        <div className='spell-library'>
            <h2>Spell Library</h2>

            <SearchBar search={search} onChange={setSearch} />


            {loading && <p>Loading spells...</p>}
            {error && <p>Error: {error}</p>}

            <ul>
                {filteredSpells.map((spell) => (
                    <SpellCard
                        key={spell.index}
                        spell={spell}
                        isFavorite={favorites.some((fav) => fav.index === spell.index)}
                        onToggleFavorite={toggleFavorite}
                    />
                ))}
            </ul>
            <HomeBtn />
            <CombatTrackerBtn />
        </div>
    );
}

export default SpellLibrary