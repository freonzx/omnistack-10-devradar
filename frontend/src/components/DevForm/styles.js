import styled from 'styled-components'

export const Form = styled.form`
    margin-top: 30px;

    .input-block {
        label {
            color: #acacac;
            font-size: 14px;
            font-weight: bold;
            display: block;
        }

        & + .input-block {
            margin-top: 20px;
        }

        input {
            width: 100%;
            height: 32px;
            font-size: 14px;
            color: #666;
            border: 0;
            border-bottom: 1px solid #eee;
        }
    }

    .input-group {
        margin-top: 20px;
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;

        .input-block {
            margin-top: 0;
        }
    }

    button[type='submit'] {
        width: 100%;
        border: 0;
        margin-top: 30px;
        background: #7d40e7;
        border-radius: 2px;
        padding: 15px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        transition-duration: 0.2s;

        &:hover {
            background: #6931ca;
        }
    }
`
