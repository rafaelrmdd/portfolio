import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from "../../components/Header";
import { ContactContainer, MainContentContainer, Row, Column, InputsContainer, InformationsContainer, InformationsNavItem } from "./styles";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('contact_service', 'contact_form', form.current, {
          publicKey: 'ZCcEQd3c22ZpRzxZd',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };  

    return(
        <ContactContainer>
            <Header/>
            <MainContentContainer>
                <Row>
                    <h1>Contato</h1>

                    <Column >
                        <InputsContainer ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" placeholder="Insira seu nome"/>
                            <input type="email" name="user_email" placeholder="Insira seu e-mail"/>
                            <textarea name='user_message' placeholder="Insira sua mensagem" />
                            <button type="submit">Enviar</button>
                        </InputsContainer>
                    </Column>
                    <Column>
                        <InformationsContainer>
                            <h2>Informações <br/>de Contato:</h2>

                            <InformationsNavItem>
                                <MdOutlineEmail size={22}/><p>rrodriguesmd17@gmail.com</p>
                            </InformationsNavItem>
                            
                            <InformationsNavItem>
                                <FiPhone size={20}/><p>11 95338-5546</p>
                            </InformationsNavItem>

                            <h2>Redes Sociais:</h2>

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