import React, { useState } from 'react'
import styled from 'styled-components'


const AppUseState = () => {
    const [time,setTime] = useState(1)

    const handleClick = () => {
        let newTime; 
        if(time>=24) {
            newTime = 1;
        } else {
            newTime = time + 1
        }
        setTime(newTime)
    }

    console.log("Update")

    return (
        <Container>
            <span>현재 시각: {time} 시 </span>
            <Button bgColor="yellow" onClick={handleClick} >Update</Button>
        </Container>
    )
}

export default AppUseState


const Button = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: bold;
    color: black;
    background-color: ${({ bgColor }) => ( bgColor ? bgColor : "blue")};
    transition: all 1.0s ease-in-out;

    &:hover,
    &:active {
        background-color: black;
        color: white;
    }

`

const Container = styled.div`
    width: 300px;
    height: 300px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 16px;
    box-shadow: 14px 9px 28px -7px rgba(0,0,0,0.78);

    ${Button} {
        margin-top: 20px;
    }
`