// import Content from "./Content.js";

function Content() {
    const tabs = ['posts', 'comments', 'albums'];

    const [title, setTitle] = React.useState('');
    const [datas, setDatas] = React.useState([]);
    const [type, setType] = React.useState('posts');
    const [showGoToTop, setShowGoToTop] = React.useState(false)

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(datas => {
                setDatas(datas);
            })
        ;
    }, [type]);

    React.useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY >= 200) {
                setShowGoToTop(true);
            }
            else {
                setShowGoToTop(false);
            }
        }
        // setShowGoToTop(window.scrollY >= 200);

        window.addEventListener('scroll', handleScroll);

        //cleanup function
        return () => {
            // window.removeEventListener('scroll');
        }

    }, [])

    

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
            { showGoToTop && (
                <button
                    style={{
                        position: "fixed",
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go To Top
                </button>
            )}
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

