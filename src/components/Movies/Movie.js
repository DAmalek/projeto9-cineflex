import styled from "styled-components";

export default function Movie({posterURL}){
    return(
        <MovieStyle>
            <img src={posterURL} />
            
        </MovieStyle>
    )
    

}

const MovieStyle = styled.div`
    
    width: 145px;
    height: 210px;
    margin: 15px 25px;
    display:flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

img{
    width: 130px;
    height: 193px;

}
`