// init statwe
const initState = 0;

//action
const DOWN_ACTION = 'down';
const UP_ACTION = 'up';

//reducer
const reducer = (state, action) => {
    console.log("reducer running...");
    switch(action) {
        case (DOWN_ACTION):
            return state - 1;
        case (UP_ACTION):
            return state + 1;
        default:
            throw new Error("Invalid Action!");
    }
}

function App() {
    
    const [count, dispatch] = React.useReducer(reducer, initState);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>    
    )
}

ReactDOM.render(<App />, document.getElementById('root'))