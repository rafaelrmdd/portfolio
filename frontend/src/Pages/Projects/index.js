import { 
    ItemsContainer, MainContentContainer, ProjectsContainer, Item, ImageContainer, SiteName,
    LowBar, Icons 
} from "./styles";
import { FaGithub } from "react-icons/fa";
import { GoLink } from "react-icons/go";
import Header from "../../components/Header";
import rCrypto from "../../assets/imgs/rcrypto.jpeg";
import moneyControl from "../../assets/imgs/moneycontrol.jpeg";
import burgerShop from "../../assets/imgs/burgershop.jpeg";


const Projects = () => {
    return (
        <ProjectsContainer>
            <Header/>
            <MainContentContainer>
                <h1>Projetos</h1>

                <ItemsContainer>
                    <Item>
                        <ImageContainer>
                            <img src={rCrypto} alt="rCrypto home page"/>
                        </ImageContainer>
                        <LowBar>
                            <SiteName> <p>rCrypto</p> </SiteName>
                            <Icons>
                                <a href="https://rcrypto.netlify.app"><GoLink size={24}/></a>
                                <a href="https://github.com/rafaelrmdd/rCrypto"><FaGithub size={24}/></a>
                            </Icons>
                        </LowBar>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <img src={moneyControl} alt="money control home page"/>
                        </ImageContainer>
                        <LowBar>
                            <SiteName> <p>Money control</p> </SiteName>
                            <Icons>
                                <a href="https://controlmoneyy.netlify.app/"><GoLink size={24}/></a>
                                <a href="https://github.com/rafaelrmdd/money-control"><FaGithub size={24}/></a>
                            </Icons>
                        </LowBar>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <span id="development-advice">EM DESENVOLVIMENTO!</span>
                            <img src={burgerShop} alt="money control home page"/>
                        </ImageContainer>
                        <LowBar>
                            <SiteName> <p>Burgershop</p> </SiteName>
                            <Icons>
                                <a href="https://r-burger-shop.netlify.app/"><GoLink size={24}/></a>
                                <a href="https://github.com/rafaelrmdd/burger-shop"><FaGithub size={24}/></a>
                            </Icons>
                        </LowBar>
                    </Item>
                    
                </ItemsContainer>
            </MainContentContainer>
        </ProjectsContainer>
    )
}

export default Projects