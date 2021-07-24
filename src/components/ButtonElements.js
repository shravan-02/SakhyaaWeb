import styled from "styled-components"
import {Link} from 'react-scroll'


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#F72A85' : '#934cff')};
    white-space: nowrap;
    // padding: ${({big}) => (big ? '14px 48px' : '12x 30px')};
    padding: ${({big}) => (big ? '12x 30px' : '14px 48px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#934CFF' : '#f72a85')};
    }
`