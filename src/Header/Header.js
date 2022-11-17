import './Header.css';
import LeftHeader from "./LeftHeader/LeftHeader";
import RightHeader from "./RightHeader/RightHeader";

function Header() {
    return (
        <header>
            <div id="headerWrapper">
                <LeftHeader />
                <RightHeader />
            </div>
        </header>
    );
}

export default Header;