function App() {
    const [type, setType] = React.useState(false);   
    
    React.useEffect(() => {
       console.log(3)
 
       return () => console.log(2)
    }, [type]);  
    
    return (
        <div>
            <h1>F8 - Học lập trình để đi làm</h1>
            {console.log(1)}
        </div>
    )
 }

ReactDOM.render(<App />, document.getElementById('root'));

