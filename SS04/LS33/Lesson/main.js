const  Form = {
    Input() {
        return (
            <input></input>
        );
    },

    checkbox() {
        return (
            <input type="checkbox" />
        );
    },
}

function App1() {

    const type1 = 'Input';
    const Component1 = Form[type1];

    const type2 = 'checkbox';
    const Component2 = Form[type2];
     
    return (
        <div id="wrapper">
            <Form.Input />
            <Component1 />
            <Form.checkbox />
            <Component2 />
        </div>
    )
};

ReactDOM.render( <App1 />, document.getElementById('root1'));


function Button({title, href, onClick}) {
    let Component = 'button';
    const props = {};

    if(href) {
        Component = 'a';
        props.href = href;
    }

    if(onClick) {
        props.onClick = onClick;
    }

    return (
        <Component {...props}>{title}</Component>
    )
};

function App2() {
    return (
        <div id="wrapper">
            <Button
                title = "NgocTan"
                href = "https://www.facebook.com/ngoctan.k19"
                onClick={() => console.log(Math.random())}
            />
        </div>
    )
};

ReactDOM.render( <App2 />, document.getElementById('root2'));

function App3() {
    return (
        <div id="wrapper">
            <div>Test boolean</div>
            <div>{true}</div>
            <div>{false}</div>
            <div>{undefined}</div>
            <div>{null}</div>
        </div>
    )
};

ReactDOM.render( <App3 />, document.getElementById('root3'));

function App4() {

    let firstAccess = true;
    let secondsAccess = false;

    return (
        <div id="wrapper">
            <div>Test render for conditions</div>
            <div>{firstAccess && "operator && with true"}</div>
            <div>{secondsAccess && "operator && with false"}</div>
            <div>{firstAccess || "operator || with true"}</div>
            <div>{secondsAccess || "operator || with false"}</div>
        </div>
    )
};

ReactDOM.render( <App4 />, document.getElementById('root3'));