function App() {
    React.useEffect(() => {
      console.log(1)
   })

   return (
       <div>
           {console.log(2)}
           <h1>F8 - Học lập trình để đi làm</h1>
       </div>
   )
}

ReactDOM.render(<App />, document.getElementById('root'));

