import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
    }

    > div {
        margin-left: 10px;

        strong {
            display: block;
            font-size: 16px;
            color: #333;
        }

        span {
            font-size: 13px;
            color: #999;
            margin-top: 2px;
        }
    }
`
