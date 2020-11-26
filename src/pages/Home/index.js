import React from 'react';
import { FiAlertTriangle,FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './style.css';

export default function Home(){
    return(
        <div className="content">
            <div className="content-center">
                <FiAlertTriangle color="#fff" size="25"/>
                <h1>Bem-vindo</h1>
                <h1>Página inicial</h1>
                <h1>Estamos em contrução.</h1>
                <Link className="link" to="/activities">
                    Acessar atividades
                    <FiArrowRight color="#fff" size="25"/>
                </Link>
            </div>
        </div>
    );
}