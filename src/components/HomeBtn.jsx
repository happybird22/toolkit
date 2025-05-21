import { useNavigate } from "react-router-dom";

const HomeBtn = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/')}>
            Return Home
        </button>
    );
};

export default HomeBtn;