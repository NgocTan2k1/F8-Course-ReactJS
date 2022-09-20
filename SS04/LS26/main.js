const courses = [
    {
        name: "Usually",
    },

    {
        name: "when we want to render a list of elements",
    },

    {
        name: "we will use the map() method.",
    },
];


const jsx = (
    <ul>
        {courses.map((course, index) => <li key={index}>{course.name}</li>)}
    </ul>
);

ReactDOM.render(jsx, document.getElementById('root'));


