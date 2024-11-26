import { useState } from "react";
import { Column, HomeContainer, MainContentContainer, Row, VerticalLine } from "./styles";
import Header from "../../components/Header";


const Home = () => {

    let [theme, setTheme] = useState("light")

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return(
        <HomeContainer theme={theme}>
            <Header anim={"activated"} onClick={handleTheme}/>
            <MainContentContainer theme={theme}>
                <Row>
                    <Column>
                        <h1>DESENVOLVEDOR <br/> FULL STACK</h1> 
                    </Column>

                    <VerticalLine/>

                    <Column>
                        <p>Desenvolvedor Full Stack</p>
                        <p>React Js</p>
                        <p>C#</p>
                    </Column>
                </Row>
            </MainContentContainer>
        </HomeContainer>
    )
}

export default Home;