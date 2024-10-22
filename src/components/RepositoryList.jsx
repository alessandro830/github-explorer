import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repositoryName = "unform2";

const repository = {
    name: "unform",
    description: "Form in react", 
    link: "https://github.com/alessandro830"
}

export function RepositoryList() {
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