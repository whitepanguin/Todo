import styled from "styled-components"

const S = {};
S.Li = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    & .complete {
        text-decoration: line-through;
        color: #d9d9d9;
    }
`
S.Title = styled.p`
    font-size: 16px;
    font-weight: 400;

`

S.SubTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 25px 0;

    & span{
        color: #7876f1;
    }
`
S.Wrapper = styled.div`
    display: flex;

    & .update-input{
        width: 250px;
        border: none;
        background-color: #f5f5f5;
        height: 30px;
        border-radius: 10px;
        padding: 0 16px;

    }
`

S.button= styled.button`
    cursor: pointer;
    background: none;
    font-size: 16px;
    & svg.pen path{
        color: #5f81f7;
    }
    & svg.trash path{
        color: #ec6863;
    }
    & svg.check path{
        color: #b965f1;
    }
    & svg.exit path{
        color: #b965f1;
    }
`
S.Input = styled.input`
    width:100%;
    border: none;
    background-color: #f5f5f5;
    height:40px;
    border-radius: 10px;
    margin: 0 0 50px 0;
    padding: 0 16px;

    &::placeholder{
        color: #b5b5b5;
    }
`

export default S;