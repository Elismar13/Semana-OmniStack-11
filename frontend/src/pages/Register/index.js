import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import { FiArrowLeft } from 'react-icons/fi';


export default function Register() {
    return (
        <div className="register-container">
            <dic className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadrastro</h1>
                    <p>Faça seu cadrastro, entre na plataforma e ajude pessoas a encontratem casos da sua ONG.</p>

                    <Link to="/register" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadrastro
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">
                        Cadrastar
                    </button>
                </form>
            </dic>
        </div>
    );
}