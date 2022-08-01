import styled from "styled-components"
import Header from "../header/Header"

export default function Session (weekday, date, showtime){

    return(
        <>
        <Header />
        <SessionDate>
            <p>{weekday} - {date}</p>
            <TimeBox>{showtime.name}</TimeBox>
        </SessionDate>
        </>
    )
}

const SessionDate = styled.div`
    font-size: 20px;
    font-weight: 400;

`

const TimeBox = styled.div`
    width: 85px;
    height: 45px;
    background-color: #E8833A;
    color: white;
    text-align:center;

`