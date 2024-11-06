import { AboutContainer, Column, MainContentContainer, Row } from "./styles";
import Header from "../../components/Header";
import { FaLocationDot } from "react-icons/fa6";


const About = () => {
    return (
        <AboutContainer>
            <Header/>
            <MainContentContainer>
                <Row>
                    <h1>Sobre <br/> mim</h1>

                    <Column>
                        <p className="main-text">
                            Meu nome é Rafael, tenho 20 anos e sou um desenvolvedor full stack. Possuo formação em 
                            Análise e Desenvolvimento de Sistemas pela UNIP e continuo aprimorando meus conhecimentos
                            através de cursos e projetos pessoais. Estou aberto a oportunidades para conseguir encontrar
                            meu primeiro emprego na área. <br/>
                        </p>

                        <h2>Minhas habilidades:</h2>

                        <Row>
                            <ul>
                                <li>React Js</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                            </ul>
                            <ul>
                                <li>C#</li>
                                <li>ASP.NET Core</li>
                                <li>Entity Framework</li>
                                <li>REST API's</li>
                            </ul>
                            <ul>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>SQLite</li>
                                <li>SQL Server</li>
                            </ul>
                        </Row>
                    </Column>

                </Row>

            </MainContentContainer>
        </AboutContainer>
    )
}

export default About;