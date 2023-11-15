import { ReactComponent as MenuIcon } from "../images/menuHeaderButton.svg"
import { ReactComponent as UserIcon } from "../images/user.svg"
import { ReactComponent as SearchIcon } from "../images/search.svg"

import {
    HeaderContainer,
    StyledHeader,
    MenuLeftSection,
    NavPillWrapper,
    NavPill,
    MenuRightSection
} from "../styles/HeadeStyles"

function Header(){
    return(
        <HeaderContainer>
            <StyledHeader>
                <MenuLeftSection>
                    <MenuIcon />
                    <img src="https://resources.redbull.com/logos/redbullcom/v3/redbullcom-logo.svg"
                    alt="Red Bull Logo" 
                    className="Logo" />
                </MenuLeftSection>
                <NavPillWrapper>
                    <NavPill>
                        <h4 name="nav-content">TV</h4>
                        <h4 name="nav-content">Events</h4>
                        <h4 name="nav-content">Athletes</h4>
                        <h4 name="nav-content">Products</h4>
                    </NavPill>
                </NavPillWrapper>
                <MenuRightSection>
                    <UserIcon className="svg" id="user" />
                    <SearchIcon className="svg" id="search" />
                </MenuRightSection>
            </StyledHeader>
        </HeaderContainer>
    )
}

export default Header