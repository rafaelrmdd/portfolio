import Header from "../../components/Header";
import { ContactContainer, MainContentContainer, Row, Column, InputsContainer, InformationsContainer, InformationsNavItem } from "./styles";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Contact = () => {
    return(
        <ContactContainer>
            <Header/>
            <MainContentContainer>
                <Row>
                    <h1>Contato</h1>

                    <Column >
                        <InputsContainer>
                            <input type="text" placeholder="Insira seu nome"/>
                            <input type="text" placeholder="Insira seu e-mail"/>
                            <textarea placeholder="Insira sua mensagem" />
                        </InputsContainer>
                    </Column>
                    <Column>
                        <InformationsContainer>
                            <h2>Informações <br/>de Contato:</h2>

                            <InformationsNavItem>
                                <MdOutlineEmail size={24}/><p>rrodriguesmd17@gmail.com</p>
                            </InformationsNavItem>
                            
                            <InformationsNavItem>
                                <FiPhone size={24}/><p>11 95338-5546</p>
                            </InformationsNavItem>

                            <h2>Redes Sociais</h2>

                            <InformationsNavItem>
                                <a href="https://www.linkedin.com/in/rafaelrmd/"><FaLinkedin size={24} className="linkedin-icon"/></a>
                                <a href="https://github.com/rafaelrmdd"><FaGithub size={24} className="github-icon"/></a>
                            </InformationsNavItem>

                        </InformationsContainer>
                    </Column>

                </Row>
            </MainContentContainer>
        </ContactContainer>
    )
}

export default Contact;