import { useNavigate } from "react-router-dom";

const CombatTrackerBtn = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/combat')}>
            Go To Combat Tracker
        </button>
    );
};

export default CombatTrackerBtn;