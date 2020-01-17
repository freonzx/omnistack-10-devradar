import React from 'react'
import { Header } from './styles'

const DevItem = ({ dev }) => {
    return (
        <li>
            <Header>
                <img src={dev.avatar_url} alt='avatar' />
                <div>
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </Header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>
                Acessar perfil no Github
            </a>
        </li>
    )
}

export default DevItem
