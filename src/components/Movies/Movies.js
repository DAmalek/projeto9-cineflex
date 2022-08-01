import styled from "styled-components"
import axios from 'axios';
import { useState,useEffect } from "react";
import Movie from "./Movie";
import Header from "../header/Header";
import { Link } from "react-router-dom";


export default function Movies(){
    const [movies,setMovies] = useState(null)

    useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		promise.then(resposta => {
			setMovies(resposta.data);
		});
	}, []);

    console.log(movies);


    return(
    <>
    <Header />
    <Container>
        
            <h1>Selecione o filme</h1>
            <MoviesContainer>
               { movies?.map(({posterURL,id}) =><Link to={`session/${id}`}><Movie posterURL={posterURL} /></Link>)}

            
            </MoviesContainer>
            
            
         
    </Container>
    </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E5E5E5;
    display: flex;
    align-items: center;
    
    flex-direction: column;
h1{
    font-size: 30px;
    margin: 40px 0;
    font-family: 'Roboto', sans-serif;
}

`

const MoviesContainer = styled.div`
    display:flex;
    width:100%;
   
    flex-wrap:wrap;


`