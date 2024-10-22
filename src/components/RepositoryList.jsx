import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/users/alessandro830/repos

const repository = {
    name: "unform",
    description: "Form in react", 
    link: "https://github.com/alessandro830"
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/alessandro830/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);
    
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository = {repository} />
                <RepositoryItem repository = {repository} />
                <RepositoryItem repository = {repository} />
                <RepositoryItem repository = {repository} />
            </ul>
        </section>
    );
}