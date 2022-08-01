import styled from 'styled-components'


export default function Header() {
    return (
        <HeaderStyle>
                <p>CINEFLEX</p>

                
        </HeaderStyle>

    )
}

const HeaderStyle = styled.header`
    width:100%;
    height: 70px;
    background-color: #C3CFD9; 
    display: flex;
    align-items:center;
    justify-content:center;
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
`