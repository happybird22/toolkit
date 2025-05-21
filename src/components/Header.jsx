import logo from '../assets/Transparent-01.png';

export default function Header({ children }) {
    return (
        <header className='header'>
            <div className='logo-container'>
                <span className='brought-by'>Brought to you by:</span>
                <img src={logo} alt="Dungeons Not Dating logo" className='logo' />
            </div>
            <div className='header-controls'>
                {children}
            </div>
        </header>
    );
}