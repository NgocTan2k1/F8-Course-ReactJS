function App() {
    const [check, setCheck] = React.useState(false);
    const [posts, setPosts] = React.useState([]);
 
    React.useEffect(() => {
       console.log('Fullstack');
    }, [posts]);   
 
    return (
        <div>F8 - Học lập trình để đi làm</div>
    )
 }

ReactDOM.render(<App />, document.getElementById('root'));

