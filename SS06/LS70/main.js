

function App() {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [products, setProducts] = React.useState([]);

    const nameRef = React.useRef();

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: parseInt(price)
        }]);

        setName('');
        setPrice('');

        nameRef.current.focus();
    };

    const total = React.useMemo(() => {
        return products.reduce((result, product) => {
            console.log(`calculation again! ${product.name}`);
            return result + product.price;
        }, 0);

    }, [products]);

    return (
        <div>
            <input 
                ref={nameRef}
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input 
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => {
                    return <li key={index}>{product.name}-{product.price}</li>
                })}
            </ul>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))