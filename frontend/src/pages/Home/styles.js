import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    aside {
        width: 320px;
        background: #fff;
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        padding: 30px 20px;

        strong {
            font-size: 20px;
            text-align: center;
            display: block;
            color: #333;
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        aside {
            width: 100%;
        }
    }
`

export const Main = styled.main`
    flex: 1;
    margin-left: 30px;

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        list-style: none;

        li {
            background: #fff;
            box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
            border-radius: 2px;
            padding: 20px;

            p {
                color: #666;
                font-size: 14px;
                line-height: 20px;
                margin: 10px 0;
            }

            a {
                color: #8e4dff;
                font-size: 14px;
                text-decoration: none;

                &:hover {
                    color: #5a2ea6;
                }
            }
        }
    }

    @media (max-width: 650px) {
        ul {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 1000px) {
        margin-left: 0;
        margin-top: 30px;
    }
`
