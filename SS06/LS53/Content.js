function Content() {
    const [title, setTitle] = React.useState('');
    const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
        document.title = title;
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            console.log(posts);
        })
    });

    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
             />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;