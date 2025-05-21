import { useReducer, useEffect } from "react";
import { combatReducer } from "../reducers/combatReducers";
import Controls from "../components/Controls";
import NewCombatantForm from "../components/NewCombatantForm";
import TurnOrderList from "../components/TurnOrderList";
import { initialCombatants } from "../data/initialCombatants";
import HomeBtn from "../components/HomeBtn";
import SpellLibraryBtn from "../components/SpellLibraryBtn";

const STORAGE_KEY = "combat-tracker-state";

function CombatTrackerPage() {
    const [combatants, dispatch] = useReducer(
        combatReducer,
        [],
        () => {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : initialCombatants;
        }
    );

    // Save combat state to localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(combatants));
    }, [combatants]);

    return (
        <div className="app-container">
            <header className="header">
                <h1 className="page-title">Dungeons Not Dating Presents: Combat Tracker!</h1>
                <p>
                    Simply add player characters and monsters with their name, HP, and initiative,
                    and let this tracker sort them for you. Make managing turns and health quick and easy!
                </p>
            </header>

            <main className="tracker-main">
                <NewCombatantForm dispatch={dispatch} />
                <Controls dispatch={dispatch} />
                <TurnOrderList combatants={combatants} dispatch={dispatch} />
            </main>
            <footer className="nav-buttons">
                <HomeBtn />
                <SpellLibraryBtn />
            </footer>
        </div>
        
    );
}

export default CombatTrackerPage;