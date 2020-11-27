import React from 'react';
import { FiAlertTriangle,FiArrowRight, FiGithub, FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div className="h-screen flex justify-center">
            <div className="self-center text-center grid justify-items-stretch">
                <FiAlertTriangle className="justify-self-center" color="#fff" size="25"/>
                <h1 className="text-xl text-white">Bem-vindo</h1>
                <h1 className="text-xl text-white">Página inicial</h1>
                <h1 className="text-xl text-white">Estamos em contrução.</h1>
                <h1 className="text-xl text-white">Clique no gato e visite meu github</h1>
                <FiArrowDown className="justify-self-center animate-bounce" color="#fff" size="25"/>
                <a className="flex justify-self-center text-white" target="_blank" rel="noopener noreferrer" href="https://github.com/claudiohenriquefds">
                    <FiGithub color="#fff" size="25"/>
                </a>
                <Link className="flex justify-self-center text-white" to="/activities">
                    Acessar atividades
                    <FiArrowRight color="#fff" size="25"/>
                </Link>
            </div>
        </div>
    );
}