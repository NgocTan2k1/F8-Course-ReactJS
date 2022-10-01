function App() {

    const [count, setCount] = React.useState(60);

    let timerId;

    const handleStart = () => {
        timerId = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
        console.log('Start-->', timerId);
    };

    const handleStop = () => {
        clearInterval(timerId);
        console.log('Stop-->', timerId);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

function App1() {

    const [count, setCount] = React.useState(60);

    const timerId = React.useRef();

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
        console.log('Start-->', timerId.current);
    };

    const handleStop = () => {
        clearInterval(timerId.current);
        console.log('Stop-->', timerId.current);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

ReactDOM.render(<App1 />, document.getElementById('root1'));

function App2() {

    const [count, setCount] = React.useState(60);

    const timerId = React.useRef();
    const prevCount = React.useRef();

    React.useEffect(() => {
        prevCount.current = count;
    }, [count])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
        console.log('Start-->', timerId.current);
    };

    const handleStop = () => {
        clearInterval(timerId.current);
        console.log('Stop-->', timerId.current);
    }

    console.log(count, prevCount.current);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

ReactDOM.render(<App2 />, document.getElementById('root2'));

function App3() {
    const [count, setCount] = React.useState(60);

    const timerId = React.useRef();
    const h1Ref = React.useRef();

    React.useEffect(() => {
        console.log(h1Ref.current)
    });

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
        console.log('Start-->', timerId.current);
    };

    const handleStop = () => {
        clearInterval(timerId.current);
        console.log('Stop-->', timerId.current);
    }

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

ReactDOM.render(<App3 />, document.getElementById('root3'));

