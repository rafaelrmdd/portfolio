import Header from "../../components/Header";
import { Column, HomeContainer, MainContentContainer, Row, VerticalLine } from "./styles";

const Home = () => {
    return(
        <HomeContainer>
            <Header/>
            <MainContentContainer>
                <Row>
                    <Column>
                        <h1>DESENVOLVEDOR <br/> FULL STACK</h1> 
                    </Column>

                    <VerticalLine/>

                    <Column>
                        <p>Desenvolvedor Full Stack</p>
                        <p>React Js - HTML - CSS</p>
                        <p>C# - WEB API's</p>
                        <p>PostgreSQL - MySQL - SQLite</p>
                    </Column>
                </Row>
            </MainContentContainer>
        </HomeContainer>
    )
}

export default Home;