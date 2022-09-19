//
// <ul class="class">
//      <li style="color: 'red'; style-list: 'none' ">JavaScripts</li>
//      <li style="color: 'violet'; style-list: 'none' >ReactJS</li>
// </ul>
//

const reactCourse = "ReactJS";
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
]

const ulReact = <ul className="class">
     <li style={{color: "red", listStyle: "none"}}>JavaScripts</li>
     <li style={{color: "violet", listStyle: "none"}}>{reactCourse}</li>
</ul>

const ulReact2 = <ul>
    {
        courses.map(course => <li style={{listStyle: 'none', color: "blue"}}>{course.name}</li>)
    }
</ul>

ReactDOM.render(ulReact, document.getElementById("root"));
ReactDOM.render(ulReact2, document.getElementById("root2"));