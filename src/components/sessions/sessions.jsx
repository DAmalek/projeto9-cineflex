import styled from "styled-components"
import axios from 'axios';
import { useState,useEffect } from "react";
import Session from "./session";
import { useParams } from 'react-router-dom';


export default function Sessions (){
    const [session, setSession] = useState(null);
    const {id } = useParams();
    console.log(id)

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${id}/showtimes`) 

        promise.then(resposta => {setSession(resposta.data)})
    }
    ,[]);
    
    
    return (
            <>
                <p>Selecione o horário</p>
                <Session />

            </>
        )



}