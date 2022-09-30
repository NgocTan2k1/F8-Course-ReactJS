// import Content from "./Content.js";

const lessons = [
    {
        id: 1,
        name: "ReactJS ?"
    },

    {
        id: 2,
        name: "SPA ?"
    },

    {
        id: 3,
        name: "MPA ?"
    },
];

function emitComment(id) {

    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Lesson ${id}'s comment content`,
            })

        )
    }, 2000)

}

emitComment(1);
emitComment(2);
emitComment(3);


function Content() {
    const [lessonId, setLessonId] = React.useState(1);

    React.useEffect(() => {

        const handleComment = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
        
    }, [lessonId]);

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            padding: '4px',
                            cursor: 'pointer',
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                        
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}


function App() {

    const [show, setShow] = React.useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content />}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

