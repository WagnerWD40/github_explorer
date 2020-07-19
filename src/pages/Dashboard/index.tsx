import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import {
    Title,
    Form,
    Repositories,
} from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
        <Title>Explore repositórios no Github</Title>

        <Form action="">
            <input type="text" placeholder="Digite o nome do repositório"/>
            <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
            <a href="teste">
                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png" alt="avatar"/>
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Easy peasy ashuduhasuhasd bla bla bla kkk cucucuuc</p>
                </div>

                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png" alt="avatar"/>
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Easy peasy ashuduhasuhasd bla bla bla kkk cucucuuc</p>
                </div>

                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png" alt="avatar"/>
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Easy peasy ashuduhasuhasd bla bla bla kkk cucucuuc</p>
                </div>

                <FiChevronRight size={20} />
            </a>
        </Repositories>
        </>
    );
}

export default Dashboard;