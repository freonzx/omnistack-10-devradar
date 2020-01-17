import React, { useState, useEffect } from 'react'
import { Container, Main } from './styles'
import DevItem from '../../components/DevItem'
import Form from '../../components/DevForm'
import api from '../../services/api'

const Home = () => {
    const [devs, setDevs] = useState([])

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs')
            setDevs(response.data.devs)
        }
        loadDevs()
    }, [])

    async function handleAddDev(data) {
        const response = await api.post('/devs', data)

        setDevs([...devs, response.data])
    }

    return (
        <Container>
            <aside>
                <strong>Cadastrar</strong>
                <Form onSubmit={handleAddDev}></Form>
            </aside>
            <Main>
                <ul>
                    {devs.map(dev => (
                        <DevItem key={dev._id} dev={dev}></DevItem>
                    ))}
                </ul>
            </Main>
        </Container>
    )
}

export default Home
