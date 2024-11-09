import { 
    ItemsContainer, MainContentContainer, ProjectsContainer, Item, ImageContainer, SiteName,
    LowBar, Icons 
} from "./styles";
import Header from "../../components/Header";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import example from "../../assets/imgs/example.jpeg";
import { GoLink } from "react-icons/go";

const Projects = () => {
    return (
        <ProjectsContainer>
            <Header/>
            <MainContentContainer>
                <h1>Projetos</h1>

                <ItemsContainer>
                    <Item>
                        <ImageContainer>
                            <img src={example} alt="example"/>
                        </ImageContainer>

                        <LowBar>
                            <SiteName> <p>Nome do site</p> </SiteName>
                            <Icons>
                                <a href="google.com"><GoLink size={24}/></a>
                                <a href="google.com"><FaGithub size={24}/></a>
                            </Icons>
                        </LowBar>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <img src={example} alt="example"/>
                        </ImageContainer>

                        <LowBar>
                            <SiteName> <p>Nome do site</p> </SiteName>
                            <Icons>
                                <a href="google.com"><GoLink size={24}/></a>
                                <a href="google.com"><FaGithub size={24}/></a>
                            </Icons>
                        </LowBar>
                    </Item>
                </ItemsContainer>
            </MainContentContainer>
        </ProjectsContainer>
    )
}

export default Projects