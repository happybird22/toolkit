import { useState } from 'react';

const CombatantCard = ({ combatant, dispatch, isActive }) => {
    const { id, name, hp, initiative } = combatant;
    const [adjustAmount, setAdjustAmount] = useState("");

    const handleHPChange = (e) => {
        dispatch({
            type: "UPDATE_HP",
            payload: { id, hp: parseInt(e.target.value) },
        });
    };

    const handleRemove = () => {
        dispatch({ type: "REMOVE_COMBATANT", payload: { id } });
    };

    const handleAdjustHP = (delta) => {
        const value = parseInt(adjustAmount);
        if (!isNaN(value)) {
            dispatch({
                type: "ADJUST_HP",
                payload: { id, amount: delta * value },
            });
            setAdjustAmount("");
        }
    };

    return (
        <div className={`combatant-card ${isActive ? 'active' : ''}`}>
            <h3>{name} {isActive && <span>🎯</span>}</h3>
            <p>Initiative: {initiative}</p>

            <label>
                HP:
                <input
                    type="number"
                    value={hp}
                    onChange={handleHPChange}
                />
            </label>

            <div className='hp-adjust'>
                <input
                    type="number"
                    value={adjustAmount}
                    placeholder='#'
                    onChange={(e) => setAdjustAmount(e.target.value)}
                />
                <button onClick={() => handleAdjustHP(1)}>+ HP</button>
                <button onClick={() => handleAdjustHP(-1)}>- HP</button>
            </div>

            <button onClick={handleRemove}>
                Remove
            </button>
        </div>
    );
};

export default CombatantCard;