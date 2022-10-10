// init statwe
const initState = {
    job:'',
    jobs: [],
};

//action
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
    return {
        type: SET_JOB,
        payload,
    };
};

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload,
    };
};

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload,
    };
};

//reducer
const reducer = (state, action) => {
    console.log("Action:", action);
    console.log("Prev state:", state);

    let newState;

    switch(action.type) {
        case (SET_JOB):
            newState = {
                ...state,
                job: action.payload
            };
            break;
        case (ADD_JOB):
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
            break;
        case (DELETE_JOB):
            const newJobs = [...state.jobs];

            newJobs.splice(action.payload, 1);

            newState = {
                ...state,
                jobs: newJobs,
            };
            break;
        default:
            throw new Error("Invalid Action!");
    }

    console.log("NewState:", newState);

    return newState;
}

function App() {
    
    const [state, dispatch] = React.useReducer(reducer, initState);
    const inputRef = React.useRef();

    const {job, jobs} = state;

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
                        <li>
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

ReactDOM.render(<App />, document.getElementById('root'))