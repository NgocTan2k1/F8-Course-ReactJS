// import Content from "./Content.js";

function Content() {
    const [count, setCount] = React.useState(1);

    React.useEffect(() => {

        console.log("Mounted and Re-render");

        //cleanup function
        return () => {
            console.log('cleanup');
        }

    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Click Me!
            </button>
        </div>
    )
}

function Avatar() {

    const [avatar, setAvatar] = React.useState();

    React.useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar]);
    
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);
        console.log('url:', file.preview);

        setAvatar(file);
    }

    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt ="" width="80%"/>
            )}
        </div>
    )
}

function App() {

    const [show, setShow] = React.useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Avatar />}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

