import { HeaderContainer, NavigationItemsContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo.png"

const Header = ({anim}) => {

    const navigate = useNavigate();

    const switchTheme = e => {
        if(e.target.checked){
            document.querySelector('body').setAttribute('data-theme', 'dark')
        }
        else{
            document.querySelector('body').setAttribute('data-theme', 'light')
        }
    }

    const handleClick = e =>{
        if(e.target.innerText === "Início"){
            navigate("/")
        }
        else if(e.target.innerText === "Projetos"){
            navigate("/projects")
        }
        else if(e.target.innerText === "Sobre mim"){
            navigate("/about")
        }
        else if(e.target.innerText === "Contato"){
            navigate("/contact")
        }
    }

    return(
        <HeaderContainer anim={anim}>
            <img src={logo} alt="Logo"/>
            <NavigationItemsContainer>
                <span onClick={handleClick}>Início</span>
                <span onClick={handleClick}>Projetos</span>
                <span onClick={handleClick}>Sobre mim</span>
                <span onClick={handleClick}>Contato</span>
            </NavigationItemsContainer>
                <label class="switch">
                    <input type="checkbox" onChange={switchTheme}/>
                    <span class="slider"></span>
                </label>
        </HeaderContainer>
    )
}

export default Header;