import React from 'react';
import { FiAlertTriangle,FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div className="content">
            <div className="content-center">
                <FiAlertTriangle color="#fff" size="25"/>
                <h1>Bem-vindo</h1>
                <h1>Atividades</h1>
                <h1>Estamos em contrução.</h1>
                <Link className="link" to="/">
                    <FiArrowLeft color="#fff" size="25"/>
                    Acessar atividades
                </Link>
            </div>
        </div>
    );
}