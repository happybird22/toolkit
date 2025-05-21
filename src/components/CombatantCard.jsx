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
        <div
            className="combatant-card"
            style={{
                border: isActive ? "3px solid limegreen" : "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: isActive ? "#f1fff1" : "#fff"
            }}
        >
            <h3>{name} {isActive && <span>🎯</span>}</h3>
            <p>Initiative: {initiative}</p>
            <label>
                HP:
                <input
                    type="number"
                    value={hp}
                    onChange={handleHPChange}
                    style={{ width: "60px", marginLeft: "0.5rem" }}
                />
            </label>

            <div style={{ marginTop: "0.5rem" }}>
                <input
                    type="number"
                    value={adjustAmount}
                    onChange={(e) => setAdjustAmount(e.target.value)}
                    style={{ width: "60px", marginRight: "0.5rem" }}
                />
                <button onClick={() => handleAdjustHP(1)}>+ HP</button>
                <button onClick={() => handleAdjustHP(-1)} style={{ marginLeft: "0.5rem"}}>- HP</button>
            </div>

            <button onClick={handleRemove} style={{ marginTop: "0.5rem" }}>
                Remove
            </button>
        </div>
    );
};

export default CombatantCard;