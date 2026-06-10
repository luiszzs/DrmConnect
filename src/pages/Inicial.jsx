import { useNavigate } from "react-router-dom";
import InicialCard from "../components/InicialCard";
import Footer from "../components/Footer";
import logoIcone from "./../assets/logo/logo-icone.png"
import imagemIcone from "./../assets/paginaInicial/iconeBackground.png"
import aprender from "./../assets/paginaInicial/card_icons/aprender_icon.png"
import conectarSe from "./../assets/paginaInicial/card_icons/conectar-se_icon.png"
import evoluir from "./../assets/paginaInicial/card_icons/evoluir_icon.png"
import perguntar from "./../assets/paginaInicial/card_icons/perguntar_icon.png"
import responder from "./../assets/paginaInicial/card_icons/responder_icon.png"

import "./../styles/inicial.css"

/* LOGO JA IMPORTADA */
export default function  Inicial(){
    /* pagina de explicação do projeto, onde mostra pequena historia, e praq server */
    const irPara = useNavigate()

    return(
        <div className="inicial-tudo">
            <nav className="navbar">
                <div className="cabeca-inicial">
                    <div className="nome-logo">
                        <img src={logoIcone} alt="logo-drm-connect" className="logoIcone"/>
                        <h1>DRM Connect</h1>
                    </div>
                </div>
                <div className="botoes-login">
                    <button className="login" onClick={() => irPara("/login")}><span>Logar</span></button>
                    <button className="cadastro" onClick={() => irPara("/cadastro")}><span>Cadastrar</span></button>
                </div>
            </nav>
            <header>
                <div className="apresentacao">
                    <div className="titulo">
                        <h1>DRM <span>Connect</span></h1>
                    </div>
                    <div className="textos">
                        <h2>O conhecimento da DRM se conecta aqui.</h2>
                        <h3>
                            Uma plataforma de perguntas e respostas feita por e para alunos da<br/>
                            EEEP Deputado Roberto Mesquita.Tire dúvidas sobre as disciplinas, relatórios<br/>
                            de estágio e projetos técnicos.
                        </h3>
                    </div>
                    <button className="comecar" onClick={() => irPara("/login")}>Começar Agora</button>
                </div>
                <div className="imagembackground">
                    <img  src={imagemIcone}/>
                </div>
            </header>
            <div className="subHeader">
                <marquee direction="left" behavior="alternate" scrollamount="5">
                    <h2>
                        Aprendizado  Inovação  Capacidade  Evolução
                        Aprendizado  Inovação  Capacidade  Evolução
                        Aprendizado  Inovação  Capacidade  Evolução
                        Aprendizado  Inovação  Capacidade  Evolução
                        Aprendizado  Inovação  Capacidade  Evolução
                    </h2>
                </marquee>
                <marquee direction="right" behavior="alternate" scrollamount="5">
                    <h2>
                        Desenvolvimento Tecnologia Educação Ensino
                        Desenvolvimento Tecnologia Educação Ensino
                        Desenvolvimento Tecnologia Educação Ensino
                        Desenvolvimento Tecnologia Educação Ensino
                        Desenvolvimento Tecnologia Educação Ensino
                    </h2>
                </marquee>
                <marquee direction="left" behavior="alternate" scrollamount="5">
                    <h2>
                        Criatividade Potencial Conectar Capacitar
                        Criatividade Potencial Conectar Capacitar
                        Criatividade Potencial Conectar Capacitar
                        Criatividade Potencial Conectar Capacitar
                        Criatividade Potencial Conectar Capacitar
                    </h2>
                </marquee>        
            </div>
            <div className="oque-pode-fazer">
                <div className="linha">
                    <InicialCard
                        imagem={perguntar}
                        titulo="Perguntar"
                        texto="Fazer perguntas e ter suas duvida sobre as materias ou projetos respondidas"
                    />
                    <InicialCard
                        imagem={responder}
                        titulo="Responder"
                        texto="Responder as perguntas de outros alunos e ajudar seus colegas compartilhando seu conhecimento"
                    />
                    <InicialCard
                        imagem={conectarSe}
                        titulo="Conectar-se"
                        texto="Conectar-se e conversa com seu colegas na nossa aba de comunidade"
                    />
                    <InicialCard
                        imagem={aprender}
                        titulo="Aprender"
                        texto="Aprender e resolver suas duvidas pendentes"
                    />
                    <InicialCard
                        imagem={evoluir}
                        titulo="Evoluir"
                        texto="Desenvolva suas habilidades e seja uma referencia entre seus colegas"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}