import React from "react";
import Textfield from "../components/Textfield";
import tatuIMG from '../image/tatu.png'


const Tela = () => {
    return (<>
    <div className="telaContainer">
    <h1>Preguiça</h1>
    <Textfield />
    <br />
    <img src={tatuIMG} width="160px"></img>
    </div>
    </>);
}

export default Tela;