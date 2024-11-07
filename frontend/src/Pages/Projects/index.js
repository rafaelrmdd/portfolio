import { 
    ItemsContainer, MainContentContainer, ProjectsContainer, Item, ImageContainer, SiteName,
    LowBar, Icons 
} from "./styles";
import Header from "../../components/Header";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../../assets/imgs/example.jpeg";

const Projects = () => {
    return (
        <ProjectsContainer>
            <Header/>
            <MainContentContainer>
                <h1>Projetos</h1>

                <ItemsContainer>
                    <Item>
                        <ImageContainer>
                            <img src={image} alt="example"/>
                        </ImageContainer>

                        <LowBar>
                            <SiteName> <p>Nome do site</p> </SiteName>
                            <Icons> <FaGithub size={26}/><FaLinkedin size={26}/> </Icons>
                        </LowBar>
                    </Item>

                    <Item>

                    </Item>
                    <Item>

                    </Item>

                </ItemsContainer>
            </MainContentContainer>
        </ProjectsContainer>
    )
}

export default Projects