// import Content from "./Content.js";

function Content() {
    console.log("mounted");
    
    return (
        <h1>Hi every one</h1>
    )
}

function App() {

    const [show, setShow] = React.useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {(show ? (<Content />) : console.log("unmounted"))}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

