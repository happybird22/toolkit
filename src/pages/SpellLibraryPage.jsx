import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import SpellCard from '../components/SpellCard';
import Header from '../components/Header';
import CombatTrackerBtn from '../components/CombatTrackerBtn';
import HomeBtn from '../components/HomeBtn';

function SpellLibraryPage() {
    const [spells, setSpells] = useState([]);
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });

    const [search, setSearch] = useState("");
    const [sortByLevel, setSortByLevel] = useState(false);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSpells = async () => {
            try {
                const response = await fetch("https://api.open5e.com/spells/");
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

    // Displayed spells after filtering and sorting
    let displayedSpells = [...spells];

    // Filter by search term
    displayedSpells = displayedSpells.filter((spell) =>
        spell.name.toLowerCase().includes(search.toLowerCase())
    );

    // Filter by favorites only if toggle is on
    if (showFavoritesOnly) {
        displayedSpells = displayedSpells.filter((spell) => 
        favorites.some((fav) => fav.slug === spell.slug)
    );
    }

    // Sort by level if toggle is on
    if (sortByLevel) {
        displayedSpells.sort((a, b) => {
            const levelA = a.level_int ?? parseInt(a.level) ?? 0;
            const levelB = b.level_int ?? parseInt(b.level) ?? 0;
            return levelA - levelB;
        });
    }
    
    // Add or remove favorites
    const toggleFavorite = (spell) => {
        if (favorites.some((fav) => fav.slug === spell.slug)) {
            setFavorites(favorites.filter((fav) => fav.slug !== spell.slug));
        } else {
            setFavorites([...favorites, spell]);
        }
    };

    return (
        <div className='spell-library-page'>
            <Header>
                <HomeBtn />
                <CombatTrackerBtn />
            </Header>
            <h1 className='page-title'>Spell Library</h1>

            <div className='spell-library-controls'>
                <SearchBar search={search} onChange={setSearch} />

                <label className='sort-toggle'>
                    <input
                        type="checkbox"
                        checked={sortByLevel}
                        onChange={(e) => setSortByLevel(e.target.checked)}
                    />
                    Sort Spells By Level
                </label>

                <label className='fav-toggle'>
                    <input
                        type="checkbox"
                        checked={showFavoritesOnly}
                        onChange={(e) => setShowFavoritesOnly(e.target.checked)}
                    />
                    Show Favorites Only
                </label>

            </div>


            {loading && <p>Loading spells...</p>}
            {error && <p>Error: {error}</p>}

            <ul className='spell-list'>
                {displayedSpells.map((spell) => (
                    <SpellCard
                        key={spell.slug}
                        spell={spell}
                        isFavorite={favorites.some((fav) => fav.slug === spell.slug)}
                        onToggleFavorite={toggleFavorite}
                    />
                ))}
            </ul>
            <div className='nav-buttons'>
                <HomeBtn />
                <CombatTrackerBtn />
            </div>
        </div>
    );
}

export default SpellLibraryPage;