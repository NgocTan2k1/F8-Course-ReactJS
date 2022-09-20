const app1 = (
    <div className="wrapper">
        Why do use Component?
        <ul>
            <li>Clear file structure</li>
            <li>Reusable</li>
        </ul>
    </div>
);

function Ul() {
    return (
        <ul>
            <li>Clear file structure</li>
            <li>Reusable</li>
        </ul>
    );
}

function DivWrapper() {
    return (
        <div className="wrapper">
            Why do use Component?
            <Ul />
        </div>
    )
}

const app = (
    <DivWrapper />
)

ReactDOM.render(app1, document.getElementById('root'));



