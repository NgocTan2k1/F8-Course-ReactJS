import { useStore, actions } from '../store';

function App78() {

    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    const handAdd = () => {
        dispatch(actions.addTodo(todoInput))
    }

    console.log(todos);

    return (
        <div>
            <input 
                value={todoInput} 
                placeholder="Enter works..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handAdd}>Add</button>
            <h1>List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <span >X</span>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default App78;