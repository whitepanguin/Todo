import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import S from './style';
import useInput from '../../hooks/useinput';

const Todo = ({ post, isTodoUpdate, handleIsTodoUpdate }) => {

    const { id, title, content, userId, isChecked } = post;
    const [value, onChange, setValue] = useInput(title);
    const [isEdit, setIsEdit] = useState(false);
    const handleIsEdit = () => {
        setIsEdit(!isEdit)
    }

    // 체크 상태 변경

    const handleChecked = async ()=>{
        // setIsCheck(!isCheck)
        await fetch(`http://localhost:4000/todo/${id}`,{
            method : 'PUT',
            headers :{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                ...post,
                isChecked: !isChecked,
            })
        })
        .then((response)=>{
                    console.log(response)
                    if (!response.ok) return console.log(`Error ${response}`);
                    handleIsTodoUpdate(!isTodoUpdate)
                })
                .catch(console.error)
    }

    // const checkTodo = async () => {
    //     fetch(`http://localhost:4000/todo/${id}`, {
    //         method: 'PUT',
    //         headers :{
    //             'Content-Type': 'application/json'
    //         },
    //         body : JSON.stringify({
    //             id: id,
    //             title : title,
    //             content: content,
    //             userId: userId,
    //             isChecked: !isChecked
    //         })
    //     })
    //     .then((response)=>{
    //         console.log(response)
    //         handleIsTodoUpdate(!isTodoUpdate)
    //         setValue("")
    //     })
    //     .catch(console.error)
    // }

// 타이틀 변경
const editTitle = async ()=>{
    if (window.confirm('제목를 수정하시겠습니까?')){
    await fetch(`http://localhost:4000/todo/${id}`,{
        method : 'PUT',
        headers :{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            ...post,
            title : value,
        })
    })
    .then((response)=>{
                console.log(response)
                if (!response.ok) return console.log(`Error ${response}`);
                handleIsTodoUpdate(!isTodoUpdate)
                handleIsEdit()
            })
            .catch(console.error)
        }
}

// 투두 삭제
const deleteTodo = async () => {
            if (window.confirm('투두를 삭제하시겠습니까?')) {
                await fetch(`http://localhost:4000/todo/${id}`, {
                    method: 'DELETE'

                })
                    .then((res) => {
                        console.log(res);
                        if (!res.ok) return console.log(`Error ${res}`);
                        handleIsTodoUpdate(!isTodoUpdate)
                    })
                    .catch(console.err)
                return;
            }
            return;
        }

        return (
            <S.Li className='li'>
                <S.Wrapper className='Wrapper'>
                    {/* <input onClick={checkTodo} checked={isChecked} type="checkbox" /> */}
                    <input onChange={handleChecked} checked={isChecked} type="checkbox" />
                    {isEdit ? (
                        <input className='update-input' value={value} onChange={onChange} />
                    ) : (
                        <S.Title className={isChecked ? "complete": ""}>
                            {title}
                        </S.Title>
                    )}
                </S.Wrapper>
                <S.Wrapper className='Wrapper'>
                    {isEdit ? (
                        <>
                            <S.button onClick={editTitle}><FontAwesomeIcon icon={faCheck} className='check' /></S.button>
                            <S.button onClick={handleIsEdit}><FontAwesomeIcon icon={faX} className='exit' /></S.button>
                        </>
                    ) : (
                        <S.button onClick={handleIsEdit}><FontAwesomeIcon icon={faPen} className='pen' /></S.button>
                    )}
                    <S.button onClick={deleteTodo}><FontAwesomeIcon icon={faTrash} className='trash' /></S.button>
                </S.Wrapper>
            </S.Li>
        );
    };

    export default Todo;