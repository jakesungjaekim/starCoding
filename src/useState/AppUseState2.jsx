import React, {useState} from 'react'
import styled from 'styled-components'

const heavyWork = () => {
    console.log('엄청 무거운 작업')
    return ['홍길동', '김민수']
}


const AppUseState2 = () => {
    const [names, setNames] = useState(()=>{
        return heavyWork()
    });
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleUpload = () => {
        setNames((prev)=>{
            return([input, ...prev])
        })
    }

  return (
    <>
    <Container>
        <Input type="text" value={input} onChange={handleInputChange}/>
        <Button color="lightgrey" onClick={handleUpload}>Upload</Button>
    </Container>
    <Container>
        {names.map((name, idx)=>{
            return <p key={idx}>{name}</p>
        })}
    </Container>
    </>
  )
}

export default AppUseState2

const Input = styled.input`
    width: 100%;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
`

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
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 16px;
    box-shadow: 14px 9px 28px -7px rgba(0,0,0,0.78);
    overflow: hidden;

    ${Button} {
        margin-top: 20px;
    }
`



