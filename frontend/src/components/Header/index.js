import { HeaderContainer, NavigationItemsContainer } from "./styles";
import { FaMoon } from "react-icons/fa";

const Header = () => {
    return(
        <HeaderContainer>
            Logo
            <NavigationItemsContainer>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </NavigationItemsContainer>
            <FaMoon size={20}/>
        </HeaderContainer>
    )
}

export default Header;