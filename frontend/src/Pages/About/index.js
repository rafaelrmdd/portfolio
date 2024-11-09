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
                            Olá! Meu nome é Rafael e tenho 20 anos. Sou um desenvolvedor full stack com formação técnica em Análise e Desenvolvimento de Sistemas pela UNIP. 
                            <br/><br/>
                            Desde cedo, sempre tive grande interesse por tecnologia e desenvolvimento de software. Durante a faculdade, me envolvi em diversos projetos práticos que me permitiram aprimorar habilidades essenciais, como trabalho em equipe, resolução de problemas complexos e gestão de projetos. 
                            <br/><br/>
                            Atualmente, continuo aprimorando meus conhecimentos por meio de cursos online, leitura de artigos técnicos e projetos pessoais. Estou em busca de minha primeira oportunidade profissional na área de desenvolvimento de software, onde possa colocar em prática tudo o que aprendi e contribuir para o crescimento da empresa. 
                            <br/><br/>
                            Possuo familiaridade com diversas tecnologias, como React, C# e bancos de dados relacionais, além de experiência na criação de Web API's utilizando .NET Core e Entity Framework. Tenho paixão pelo que faço e estou animado para aprender e me desenvolver constantemente. 
                            <br/><br/>
                            Estou aberto a novas oportunidades e acredito que meu conhecimento técnico, habilidades de resolução de problemas e motivação podem agregar valor à sua equipe. Ficarei feliz em conversar mais sobre como posso contribuir para o sucesso do seu negócio. 
                            <br/>
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