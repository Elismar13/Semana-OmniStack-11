import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        api.get('incidents', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
            console.log(response.data)

        })
    }, [ongId]);

    async function handleDelete(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            }) 
        } catch (e) {
            alert("Erro ao deletar caso.");
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="Be the Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadrastar novo caso</Link>

                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadrastrados</h1>
            <ul>
                { incidents.map((incident) => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{ incident.title }</p>

                        <strong>DESCRICAO</strong>
                        <p>{ incident.description }</p>

                        <strong>VALOR</strong>
                        <p>{ Intl.NumberFormat('pt-br', { style: 'currency', currency:'BRL' }).format(incident.value) }</p>

                        <button type="button" onClick={ handleDelete(incident.id) } >
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                </li>
                )) }

            </ul>
        </div>
    )
}