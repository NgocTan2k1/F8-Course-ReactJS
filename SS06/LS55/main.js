// import Content from "./Content.js";

function Content() {
    const tabs = ['posts', 'comments', 'albums'];

    const [title, setTitle] = React.useState('');
    const [datas, setDatas] = React.useState([]);
    const [type, setType] = React.useState('posts');

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(datas => {
                setDatas(datas);
            })
        ;
    }, [type]);

    

    return (
        <div>
            {tabs.map( tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
             />

            <ul>
                {datas.map(data => (
                    <li key={data.id}>{data.title || data.name}</li>
                ))}
            </ul>
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

