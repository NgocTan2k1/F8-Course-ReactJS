// import Content from "./Content.js";

function Content() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => { //React.useLayoutEffect(() => { 
        if(count > 5) {
            setCount(0);
        }
    }, [count]);

    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>
                Click Me!
            </button>
        </div>
    )
}


function App() {

    const [show, setShow] = React.useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content />}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

