function Content1({count}) {
    console.log("re-render");

    return `
        <h1>Hi ${count}</h1>
    `
}


function App() {

    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);

    const increase1 = () => {
        setCount1(prevCount => prevCount - 1)
    };

    const increase2 = () => {
        setCount2(prevCount => prevCount - 1)
    };

    return `
        <div>
            <${Content1} count=${count1}/>
            <h1>${count1}</h1>
            <button onClick=${increase1}>Click 1!</button>
            <button onClick=${increase2}>Click 2!</button>
        </div>
    `;
}

console.log(App)

ReactDOM.render(<App />, document.getElementById('root'));



