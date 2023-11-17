// import { toggleTodo } from "../../redux/actions/todoActions";
import { useEffect } from "react";
import { actions, getInitialStateAsyc, todoSelector } from "../../redux/reducers/todoReducer";
import "./ToDoList.css";

import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";

function ToDoList() {

  // const todos = useSelector((state) => state.todoReducer.todos);
  const todos = useSelector(todoSelector);
  
  // //const todos = store.getState().todos;
  const dispatch = useDispatch();

  useEffect(() => {
    // 1.....
    // fetch("http://localhost:4100/api/todos")
    // .then(res => res.json())
    //   .then(parsedJson => {
    //     console.log(parsedJson);
    //   })


    // 2.....
    // manage API data using component...
    // axios.get("http://localhost:4100/api/todos")
    //   .then(res => {
    //     console.log(res.data);
    //     dispatch(actions.setInitialState(res.data));
    //   })


    // ....for manage API data using Redux-toolkit we have to shift this axios fetching in reduers file.....
    dispatch(getInitialStateAsyc());
  }, []);

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={index}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          // onClick={()=>{dispatch(toggleTodo(index))}}
          onClick = {() => {
            // console.log('[LOG]: Todo - TOGGLE Action dispatched');  //------manual log-----
            dispatch(actions.toggle(index))
          }}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
