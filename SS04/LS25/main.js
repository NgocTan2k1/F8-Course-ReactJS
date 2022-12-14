const courses = [
    {
        name: "HTML, CSS",
    },

    {
        name: "Responsive Web Design",
    },

    {
        name: "ReactJS",
    },
];


const jsx = (
    <ul>
        {courses.map((course, index) => <li key={index}>{course.name}</li>)}
    </ul>
);

ReactDOM.render(jsx, document.getElementById('root'));

const jsx2 = [
    <h1>Hello!!!</h1>,
    <h2>Hi</h2>
];

ReactDOM.render(jsx2, document.getElementById('root'));

