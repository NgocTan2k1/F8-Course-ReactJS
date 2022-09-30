console.log('Alos')

function App() {
    const [cars, setCars] = React.useState(['Bugatti', 'Roll-Royce', 'Maybach']);
    
    const handleUpdate = () => {
         setCars((prevState) => {
              return [...prevState, 'Lamborghini']
         })
    }

    console.log(cars) // Output: ?

    return (
        <div>
            <h1>Review useState</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

// root.innerHTML = `
//     import { useState, 
//         useEffect, 
//         useLayoutEffect, 
//         useRef, 
//         useCallBack, 
//         useMemo, 
//         useReducer, 
//         useContext, 
//         useImperativeHandle, 
//         useDebugValue, } from 'react';

//     function ComponentA() {
//         return <h1>Haven't used hook yet</h1>
//     }

//     function ComponentB() {
//         //useState
//         const[state, setState] = useState(initState);

//         //useEffect
//         useEffect(() => {}, [deps]);

//         //useRef
//         const ref = useRef();

//         //useLayoutEffect
//         useLayoutEffect(() => {}, [deps]);

//         //useCallBack
//         const fn = useCallBack(() => {}, [deps]);

//         //useMemo
//         const result = useMemo(() => {}, [deps]);

//         //useReducer
//         const = [state, dispatch] = useReducer(reducer, initalArg, init)

//         //useContext
//         const value = useContext(myContext)

//         //useImperativeHandle
//         useImperativeHandle(ref, createHandle, [deps])

//         //useDebugValue
//         useDebugValue(isOnline ? 'Online' : 'Offline')

//         return <h1>HOOKS</h1>
//     }
// `
