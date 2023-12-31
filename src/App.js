import { useState } from "react"; //호출 (1)
import { FaTrashCan } from 'react-icons/fa6';
import './App.css';

function App() {
  const title = "TO-DO APP";
  const subtitle = "오늘 뭐하지 앱"
  const [todo, setTodo] = useState([""]); //할일 항목을 기록 
  const [todos, setTodos] = useState([]); //할일들을 기록


  function handleChange(e){
    // if (e.target.value.length == 0) { //할일 입력칸이 공백일때
    //   alert("할일을 입력해주세요?");
    // } else {
      setTodo(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault(); //페이지 새로고침 금지
    setTodo(""); //할일 초기화
    setTodos((todos) => [todo, ...todos]); //화살표 함수, 나머지 연산자
  }
  function handleRemove(id){
    setTodos (todos.filter((todo,i) => i !== id));
  }


  return (
    <div className="App">
      <header className="site-header text-center py-1">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
      <form id="todoForm" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="d-none">할일</legend>
          <div className="d-flex justify-center">
            <label>할일</label>
            <input type="text"
            id="todo_input"
            value={todo}
            onChange={handleChange}/>
            <button type="sumbit" className="ml-1">등록</button>
          </div>
        </fieldset>
      </form>
      <hr />
      <ul>
        {todos.map((todo, i) => (
        <li key={i}>
          {i}번째 할일 : {todo}{""}
          <FaTrashCan onClick={() => handleRemove(i)}>삭제</FaTrashCan>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
