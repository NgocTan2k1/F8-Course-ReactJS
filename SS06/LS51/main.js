function App() {
    const [job, setJob] = React.useState('');
    const [jobs, setJobs] = React.useState(() => {
        return JSON.parse(localStorage.getItem('jobs')) || [];
    });

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job];

            //save to local storage
            localStorage.setItem('jobs', JSON.stringify(newJobs));

            return newJobs;
        });
        setJob('');

    }

    return (
        <div>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

