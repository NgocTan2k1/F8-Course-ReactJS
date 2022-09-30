// import Content from "./Content.js";

function Content() {
    
    const [countdown, setCountdown] = React.useState(180);

    React.useEffect(()=> {
        const timerId = setInterval(() => {
            setCountdown(countdown => {
                console.log("before interval:", countdown);
                countdown = countdown - 1;
                console.log("after interval:", countdown);
                return countdown;
            }
            );
        }, 1000);
        return () => clearInterval(timerId)
    }, [])

    React.useEffect(()=> {
        const timerId = setTimeout(() => {
            setCountdown(countdown => {
                console.log("before timeout:", countdown);
                countdown = countdown - 1;
                console.log("after timeout:", countdown);
                return countdown;
            });
        }, 1000);
        return () => clearTimeout(timerId)
    }, [countdown])

    console.log("re-render");
    console.log(countdown);

    return (
        <div>
            <h1>{countdown}</h1>
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

