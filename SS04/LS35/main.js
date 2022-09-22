/**
 * <YourComponet
 *      propName1 = "String literals"
 *      propName2 = {expression}
 * />
 */

function Button({title}) {
    console.log(title);

    return (
        <button>{title}</button>
    );
}

function App1() {
    return (
        <div id="wrapper">
            <Button 
                title = "Click me!!!"
            />

            <Button 
                title = {"Click me again!!!"}
            />

            <Button 
                title 
            />

        </div>
    )
};

ReactDOM.render( <App1 />, document.getElementById('root1'))

// spread, rest props

function Input1({label, type, placeholder}) {
    return (
        <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
};

function Input2({label, ...inputProps}) {
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps} />
        </div>
    )
};

function App2() {
    return (
        <div id="wrapper">
            <Input1
                label="First Name"
                type="text"
                placeholder="Enter..."
            />
            <Input2
                label="Male"
                type="radio"
                placeholder="Enter..."
            />
            <Input2
                label="Female"
                type="radio"
                placeholder="Enter..."
            />

        </div>
    )
};

ReactDOM.render( <App2 />, document.getElementById('root2'));


// Children props
// <YourComponent>String literals</YourComponent>
// <YourComponent>{expression}</YourComponent>
function Button1({children}) {
    return (
        <button>{children}</button>
    );
};

function App3() {
    return (
        <div id="wrapper">
            <Button1>ClickMe!!!</Button1>
            <Button1>{false || 'false || ClickME!!'}</Button1>
        </div>
    )
};

ReactDOM.render( <App3 />, document.getElementById('root3'));
