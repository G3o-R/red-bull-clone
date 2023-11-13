import { ReactComponent as MenuIcon } from "../images/menuHeaderButton.svg"
import { ReactComponent as UserIcon } from "../images/user.svg"
import { ReactComponent as SearchIcon } from "../images/search.svg"

function Header(){
    return(
        <header name="menu-header-content">
            <div name="menu-header">
                <div name="menu-left-button">
                    <MenuIcon className="menu"/>
                    <img src="https://resources.redbull.com/logos/redbullcom/v3/redbullcom-logo.svg"
                    alt="Red Bull Logo" 
                    className="Logo" />
                </div>
                <div name="nav-pill">
                    <h4 name="nav-content">TV</h4>
                    <h4 name="nav-content">Events</h4>
                    <h4 name="nav-content">Athletes</h4>
                    <h4 name="nav-content">Products</h4>
                </div>
                <div name="menu-right-buttons">
                    <UserIcon className="svg" id="user" />
                    <SearchIcon className="svg" id="search" />
                </div>
            </div>
        </header>
    )
}

export default Header