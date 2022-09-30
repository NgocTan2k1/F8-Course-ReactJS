import { useState, useEffect } from 'react';


function Content1() {
    const [count, setCount] = useState(1);

    useEffect(() => {

        console.log(`Mounted and Re-render ${count}`);

        //cleanup function
        return () => {
            console.log(`cleanup ${count}`);
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

export default Content1;