import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import useInputState from '../../hooks/useInputState';

import {
    Logo,
    Title,
    Form,
    ErrorMessage,
    Repositories,
} from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, changeNewRepo, resetNewRepo] = useInputState('');
    const [inputError, setInputError] = useState('');

    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }

        return [];
    });

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        localStorage.setItem(
            '@GithubExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    async function handleAddRepository(
        event: FormEvent<HTMLFontElement>
        ): Promise<void> {

        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite no formato autor/nome do repositório');
            return; 
        };
        
        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;
    
            setRepositories([...repositories, repository]);
            setInputError('');
        } catch {
            setInputError('Erro na busca do repositório')    
        } finally {
            resetNewRepo();
        }

    }
    
    return (
        <>
            <Logo>
                <img src={logo} alt="Github_Explorer"/>
            </Logo>
            <Title>Explore repositórios no Github</Title>

            <Form onSubmit={handleAddRepository} hasError={!!inputError}>
                <input
                ref={inputRef}
                value={newRepo}
                onChange={changeNewRepo}
                    type="text"
                    placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            { inputError && <ErrorMessage>{inputError}</ErrorMessage>}

            <Repositories>
            {
                repositories.map(repository => (
                <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
                ))
            }

            </Repositories>
        </>
    );
}

export default Dashboard;