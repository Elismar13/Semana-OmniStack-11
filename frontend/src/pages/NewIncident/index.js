import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft  } from 'react-icons/fi';


import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadrastrar um novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para a home
                    </Link>
                </section>

                <form>
                    <input placeholder="Título do caso" />
                    <input type="email" placeholder="E-mail" />
                    <textarea placeholder="Descrição" /> 

                    <input placeholder="Valor em reais"/>

                    <button className="button" type="submit">
                        Cadrastar
                    </button>
                </form>
            </div>
        </div>
    )
}