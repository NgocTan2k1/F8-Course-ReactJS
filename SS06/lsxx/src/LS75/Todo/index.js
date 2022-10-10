import {useReducer, useRef} from 'react';
import  reducer, {initState} from './reducer';
import { setJob, deleteJob, addJob } from './action';
import logger from './logger';

function TodoApp() {
    
    const [state, dispatch] = useReducer(logger(reducer), initState);
    const inputRef = useRef();

    const { job, jobs } = state;

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
    }

    return (
        <div>
            <input 
                ref={inputRef}
                value={job}
                placeholder="Enter Job..."
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>
                            {job}
                            <span
                            style={{cursor: "pointer",}}
                            onClick={() => dispatch(deleteJob(index))}>&times;</span>
                        </li>
                    )
                })}
            </ul>
        </div>    
    )
}

export default TodoApp;