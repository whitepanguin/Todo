import S from './style';
import useInput from '../../hooks/useinput';

const TodoInsert = ({isTodoUpdate, handleIsTodoUpdate}) => {
    const [value,onChange, setValue]=useInput("");

    const onKeyPressAddTodo = (e)=>{
        if(e.key=== 'Enter'){
            if(!window.confirm("이대로 추가 하시겠습니까?")) return;
            // 데이터 전송(Create)
            console.log(value)
            fetch("http://localhost:4000/todo", {
                method: 'POST',
                headers :{
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    title : value,
                    isChecked: false
                })
            })
            .then((response)=>{
                console.log(response)
                handleIsTodoUpdate(!isTodoUpdate)
                setValue("")
            })
            .catch(console.error)
        }
    }

    return (
        <div>
            <S.Input value={value} onChange={onChange} placeholder='할 일을 추가해볼까요?' onKeyUp={onKeyPressAddTodo}/>
        </div>
    );
};

export default TodoInsert;