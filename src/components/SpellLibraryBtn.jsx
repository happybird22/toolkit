import { useNavigate } from "react-router-dom";

const SpellLibraryBtn = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/spells')}>
            Go To Spell Library
        </button>
    );
};

export default SpellLibraryBtn;