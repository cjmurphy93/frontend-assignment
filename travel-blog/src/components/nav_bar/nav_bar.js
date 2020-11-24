import './nav_bar.scss';

const NavBar = () => {
    return (
        <div className="nav">
            <div className="nav__content" >
                <div className="nav__left">
                    <h1 className="nav__title">Travelize</h1>
                    <h3 className="nav__subtitle">My traveling experiences</h3>
                </div>
                <div className="nav__right">
                    <button className="nav__button">Home</button>
                    <button className="nav__button" >Blog</button>
                    <button className="nav__button nav__button--about" >About</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;