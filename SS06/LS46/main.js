const root = document.getElementById('root');

root.innerHTML = `
    import { useState, 
        useEffect, 
        useLayoutEffect, 
        useRef, 
        useCallBack, 
        useMemo, 
        useReducer, 
        useContext, 
        useImperativeHandle, 
        useDebugValue, } from 'react';

    function ComponentA() {
        return <h1>Haven't used hook yet</h1>
    }

    function ComponentB() {
        //useState
        const[state, setState] = useState(initState);

        //useEffect
        useEffect(() => {}, [deps]);

        //useRef
        const ref = useRef();

        //useLayoutEffect
        useLayoutEffect(() => {}, [deps]);

        //useCallBack
        const fn = useCallBack(() => {}, [deps]);

        //useMemo
        const result = useMemo(() => {}, [deps]);

        //useReducer
        const = [state, dispatch] = useReducer(reducer, initalArg, init)

        //useContext
        const value = useContext(myContext)

        //useImperativeHandle
        useImperativeHandle(ref, createHandle, [deps])

        //useDebugValue
        useDebugValue(isOnline ? 'Online' : 'Offline')

        return <h1>HOOKS</h1>
    }
`

console.log('Hello');
