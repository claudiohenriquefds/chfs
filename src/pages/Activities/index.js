import React from 'react';
import { FiBookOpen,FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import Image1 from '../../assets/1.jpeg';
import Image2 from '../../assets/2.jpeg';
import Image3 from '../../assets/3.jpeg';
import Image4 from '../../assets/4.jpeg';
export default function Home(){
    return(
        <div className="">
            <div className="m-10">
                <div id="dark-type" className="self-center grid justify-items-stretch text-white text-blue-dark p-5 rounded shadow-xl">
                    <FiBookOpen className="justify-self-center" color="#fff" size="25"/>
                    <h1 className="justify-self-center text-2xl">Sistemas Distribuidos</h1>
                    <h3 className="justify-self-center text-xl">Pesquisa sobre Sistemas operacionais</h3>
                    <hr className="text-center justify-self-center w-1/4 m-5" />
                    <h2 className="justify-self-center text-lg">Sistema Operacional Centralizado</h2>
                    <hr className="text-center justify-self-center w-1/4 m-5" />
                    <span className="">
                        <p>Um sistema de operacional centralizado (SOC) é aquele executado em uma coleção de máquinas, que se utiliza de seus recursos individuais e possui uma máquina servidora que centraliza todas as informações. São sistemas que possuem pouco poder de processamento sequencial (tempo compartilhado) e necessitam de um mainframe para que possa funcionar com qualidade. Porém, por maior que seja a velocidade de processamento de um mainframe, ele jamais conseguirá alcançar o poder de processamento de vários microcomputadores interligados, como se fosse um único sistema.</p>

                        <p className="m-1">Algumas caracteristicas:</p>
                        <ul className="list-disc ml-10">
                            <li>Existem três modelos de sistemas centralizados: Monousuário, Cliente-servidor (duas camadas) e Multicamadas.</li>
                            <li>São utilizadas as máquinas clientes com pouca capacidade e um servidor robusto.</li>
                            <li>Um sistema centralizado não há necessidade de um diretório distribuído.</li>
                        </ul>
                        <div className="grid grid-cols-3 gap-4">
                            <div></div>
                            <img src={Image1} className="rounded mt-1 mb-1 w-96" alt="Imagem sobre um sistema operacional centralizado" />
                            <div></div>
                        </div>
                        <a className="m-3" href="https://www.infoescola.com/informatica/sistema-de-informacao-centralizado/">Link de referência: https://www.infoescola.com/informatica/sistema-de-informacao-centralizado/</a>
                    </span>
                    <hr className="text-center justify-self-center w-1/4 m-5" />
                    <h2 className="justify-self-center text-lg">Sistema Operacional De Rede</h2>
                    <hr className="text-center justify-self-center w-1/4 m-5" />
                    <span className="">
                        <p>Um Sistema Operacional de Redes é um conjunto de módulos que amplíam os sistemas operacionais, complementando-os com um conjunto de funções básicas, e de uso geral, que tornam transparente o uso de recursos compartilhados da rede</p>

                        <p className="m-1">Algumas caracteristicas:</p>
                        <ul className="list-disc ml-10">
                            <li>Portes diversos</li>
                            <li>Sistemas operacionais diversos</li>
                            <li>Redes diversas</li>
                            <li>Compartilhamento de arquivos e impressoras</li>
                            <li>Servidores: Servidor de Arquivos, Servidor de Banco de Dados, Servidor de Impressão, Servidor de Comunicação, Servidor de Gerenciamento.</li>
                        </ul>
                        <div className="grid grid-cols-3 gap-4">
                            <div></div>
                            <img src={Image2} className="rounded mt-1 mb-1 w-96" alt="Imagem sobre um sistema operacional de rede" />
                            <div></div>
                        </div>
                        <a className="m-3" href="http://rrbrandt.dee.ufcg.edu.br/br/docs/redes/sor">Link de referência: http://rrbrandt.dee.ufcg.edu.br/br/docs/redes/sor</a>
                    </span>
                    <hr className="text-center justify-self-center w-1/4 m-5" />
                    <h2 className="justify-self-center text-lg">Sistema Operacional Distribuido</h2>
                    <hr className="text-center justify-self-center w-1/4 m-5" />
                    <span className="">
                        <p>Um sistema distribuído é um conjunto de computadores independentes entre si que se apresenta a seus usuários como um sistema único e coerente, com base nessa afirmação podemos considerar que um sistema distribuído é uma colação de computadores e softwares interconectados por uma rede, projetados para resultar em uma aplicação integrada.</p>

                        <p className="m-1">Tipos de transferencia:</p>
                        <ul className="list-disc ml-10">
                            <li>Transparência de Acesso</li>
                            <li>Transparência de Localização</li>
                            <li>Transparência de Migração</li>
                            <li>Transparência de Relocação</li>
                            <li>Transparência de Replicação</li>
                            <li>Transparência de Concorrência</li>
                            <li>Transparência de falhas</li>
                        </ul>
                        <p className="m-1">Caracteristicas:</p>

                        <p className="m-1">Abertura:</p>
                        <ul className="list-disc ml-10">
                            <li>É a característica que determina se um sistema pode ser ampliado de formas diferentes, com relação a hardware, onde podem ser incluídos dispositivos de fabricação diversa, e software, inclusão de modulo do sistema operacional, adição de protocolos de comunicação e compartilhamento de recursos. A interoperabilidade é a forma de garantir que duas ou mais implementações de sistemas ou componentes de fornecedores diferentes trabalhem de forma conjunta.</li>
                        </ul>

                        <p className="m-1">Portabilidade:</p>
                        <ul className="list-disc ml-10">
                            <li>Também é uma característica da abertura, a portabilidade é a maneira de garantir que um sistema funcione em um outro sistema sem a mesma interfaces e equipamentos do sistema de origem. É muito importante para esta característica é a padronização dos serviços.</li>
                        </ul>

                        <p className="m-1">Escalabilidade:</p>
                        <ul className="list-disc ml-10">
                            <li>Podemos afirmar que os sistemas são classificados de 3 formas com relação a escalabilidade, por tamanho, em termos geográficos e termos administrativos. O aumento do tamanho dos sistemas faz com que o problemas também aumente, podemos conceituar o tamanho como serviços centralizados, onde um servidor único é usado por todos os usuários, pode gerar um gargalo no sistema.</li>
                        </ul>
                        <div className="grid grid-cols-3 gap-4">
                            <div></div>
                            <img src={Image3} className="rounded mt-1 mb-1 w-96" alt="Imagem sobre um sistema operacional distribuido" />
                            <div></div>
                        </div>
                        <a className="m-3" href="https://tecnologia.culturamix.com/dicas/o-que-e-um-sistema-distribuido">Link de referência: https://tecnologia.culturamix.com/dicas/o-que-e-um-sistema-distribuido</a>
                    </span>
                    <hr className="text-center justify-self-center w-1/4 m-5" />
                    <h2 className="justify-self-center text-lg">Sistema Operacional Paralelo</h2>
                    <hr className="text-center justify-self-center w-1/4 m-5" />
                    <span className="">
                        <p>“O principal propósito de processamento paralelo é realizar computação mais rápida do que pode ser feita com um único processador, usando mais do que um processadores concorrentes” (JaJa, 1992) O processamento paralelo pode ser definido como “uma forma eficiente de processamento da informação com ênfase na exploração de eventos concorrentes no processo computacional” Hwang PROGRAMAÇÃO PARALELA “Programação paralela implica em dividir problemas em partes nas quais processadores realizam a computação.” (WILKINSON e ALLEN, 1999)</p>

                        <p className="m-1">Algumas caracteristicas:</p>
                        <ul className="list-disc ml-10">
                            <li>Sistemas com mais do que uma unidade de processamento.</li>
                            <li>Unidades trabalham em paralelo para resolver um problema.</li>
                            <li>Maquinas paralelas caracterizam-se por custo elevado e/ou dificuldade de programação.</li>
                            <li>Custo pode ser diminuído a partir do entendimento das alternativas de construção de máquinas paralelas, possibilitando uma arquitetura mais acessível que obtenha o desempenho desejado.</li>
                            <li>Necessidade de conhecimento de características específicas da máquina para a qual serão implementados as aplicações paralelas aumentam a complexidade no desenvolvimento de programas.</li>
                        </ul>
                        <div className="grid grid-cols-3 gap-4">
                            <div></div>
                            <img src={Image4} className="rounded mt-1 mb-1 w-96" alt="Imagem sobre um sistema operacional paralelo" />
                            <div></div>
                        </div>
                    </span>
                    <hr className="text-center justify-self-center w-1/4 m-5" />
                    <Link className="justify-self-center text-white flex mt-1" to="/">
                        <FiArrowLeft color="#fff" size="25"/>
                        Acessar página incial
                    </Link>
                </div>
            </div>
        </div>
    );
}