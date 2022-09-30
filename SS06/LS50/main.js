const gifts = [
    'CPU i9',
    'RAM 32GB RGB',
    'RGB Keyboard',
    'GTX 1080',
    'Dell', 
    'ASUS',
    'iPhone',
    'Oppo',
    'SumSung'
]

function App() {
    const [gift, setGift] = React.useState();
    
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)

        setGift(gifts[index]);
    }

    return (
        <div>
            <h2>{gift || 'No gift'}</h2>
            <button onClick={randomGift}>Random</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

function App1() {
    const [name, setName] = React.useState("")

    return(
        <div>
            <h1>Two-way binding</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setName("Pham Ngoc Tan")}>Change</button>
        </div>
    )
}

ReactDOM.render(<App1 />, document.getElementById('root1'));

//
const courses = [
    {
        id: 1,
        name: 'HTML&CSS',
    },

    {
        id: 2,
        name: 'JavaScript',
    },

    {
        id: 3,
        name: 'ReactJS',
    },
]

function App2() {
    const [checked, setChecked] = React.useState()
    console.log(checked)

    return (
        <div>Radio
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='radio'
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
        </div>
    )
}

ReactDOM.render(<App2 />, document.getElementById('root2'));

function App3() {
    const [checked, setChecked] = React.useState([]);
    console.log(checked);

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if(isChecked) {
                return checked.filter(item => item !==id );
            } else {
                return [...prev, id];
            }
        })
    }

    const handleSubmit = () => {
        console.log({id: checked});
    }

    return (
        <div>Checkbox
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='checkbox'
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

ReactDOM.render(<App3 />, document.getElementById('root3'));
