import React from 'react'
import { Container, Form, Main, Header } from './styles'

const Home = () => {
    return (
        <Container>
            <aside>
                <strong>Cadastrar</strong>
                <Form>
                    <div className='input-block'>
                        <label htmlFor='github_username'>
                            Usuário do Github
                        </label>
                        <input
                            name='github_username'
                            id='github_username'
                            required
                        />
                    </div>
                    <div className='input-block'>
                        <label htmlFor='techs'>Tecnologias</label>
                        <input name='techs' id='techs' required />
                    </div>

                    <div className='input-group'>
                        <div className='input-block'>
                            <label htmlFor='latitude'>Latitude</label>
                            <input name='latitude' id='latitude' required />
                        </div>

                        <div className='input-block'>
                            <label htmlFor='longitude'>Longitude</label>
                            <input name='longitude' id='longitude' required />
                        </div>
                    </div>

                    <button type='submit'>Cadastrar</button>
                </Form>
            </aside>
            <Main>
                <ul>
                    <li>
                        <Header>
                            <img
                                src='https://avatars0.githubusercontent.com/u/26206406?s=460&v=4'
                                alt='avatar'
                            />
                            <div>
                                <strong>Yago Theodoro</strong>
                                <span>ReactJS, NodeJS, React Native</span>
                            </div>
                        </Header>
                        <p>Fullstack Developer & InfoSec Enthusiast</p>
                        <a href='https://github.com/freonzx'>
                            Acessar perfil no Github
                        </a>
                    </li>
                    <li>
                        <Header>
                            <img
                                src='https://avatars0.githubusercontent.com/u/26206406?s=460&v=4'
                                alt='avatar'
                            />
                            <div>
                                <strong>Yago Theodoro</strong>
                                <span>ReactJS, NodeJS, React Native</span>
                            </div>
                        </Header>
                        <p>Fullstack Developer & InfoSec Enthusiast</p>
                        <a href='https://github.com/freonzx'>
                            Acessar perfil no Github
                        </a>
                    </li>
                    <li>
                        <Header>
                            <img
                                src='https://avatars0.githubusercontent.com/u/26206406?s=460&v=4'
                                alt='avatar'
                            />
                            <div>
                                <strong>Yago Theodoro</strong>
                                <span>ReactJS, NodeJS, React Native</span>
                            </div>
                        </Header>
                        <p>Fullstack Developer & InfoSec Enthusiast</p>
                        <a href='https://github.com/freonzx'>
                            Acessar perfil no Github
                        </a>
                    </li>
                    <li>
                        <Header>
                            <img
                                src='https://avatars0.githubusercontent.com/u/26206406?s=460&v=4'
                                alt='avatar'
                            />
                            <div>
                                <strong>Yago Theodoro</strong>
                                <span>ReactJS, NodeJS, React Native</span>
                            </div>
                        </Header>
                        <p>Fullstack Developer & InfoSec Enthusiast</p>
                        <a href='https://github.com/freonzx'>
                            Acessar perfil no Github
                        </a>
                    </li>
                </ul>
            </Main>
        </Container>
    )
}

export default Home
