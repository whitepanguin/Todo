import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoInsert from './TodoInsert';


const TodoContainer = () => {

    // http://localhost:4000/ 로 투두를 요청하여 console.log에 출력하기
    // 단 useState로 데이터를 넣고, 넣은 데이터를 출력한다.
    // 모든 비동기 요청은 사이드이팩트가 발생한 수 있다.
      
    const [post,setPosts] = useState([]);
    const [isTodoUpdate, setIsTodoUpdate] = useState(false);
    const handleIsTodoUpdate =()=>{
        setIsTodoUpdate(!isTodoUpdate)
    }
    
    useEffect(()=>{
        
        const getPosts = async()=>{
            const response = await fetch("http://localhost:4000/todo");
            const datas = await response.json()
            return datas;
        }
        getPosts()
            .then(setPosts)
            .catch(console.error)
    },[isTodoUpdate])
    console.log(post)
    
    

    return (
        <div>
            <TodoInsert isTodoUpdate={isTodoUpdate} handleIsTodoUpdate={handleIsTodoUpdate}/>
            <p className='subTitle'>남은 할일 : 😼<span>{post && post.filter(({isChecked})=>!isChecked).length}</span> </p>
            <ul>
                { post && post.map((post , i )=>(
                    <Todo post={post} key={i} isTodoUpdate={isTodoUpdate} handleIsTodoUpdate={handleIsTodoUpdate}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoContainer;