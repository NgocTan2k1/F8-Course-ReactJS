const app1 = (
    <div className="wrapper">
        <div className="header">Header</div>
        <div className="content">Content</div>
        <div className="footer">Footer</div>
    </div>
);

// ReactDOM.render(app1, document.getElementById('root'));

function Header() {
    return (<div className="header">New Header</div>);
};

class Content extends React.Component {
    render() {
        return (<div className="content">New Content</div>)
    }
};

const app2 = (
    <div className="wrapper">
        <Header />
        <Content></Content>
        <div className="footer">Footer</div>
    </div>
);

// ReactDOM.render(app2, document.getElementById('root1'));

const exc = (
    <div className="posts-list">
        <div className="post-item">
            <img src="facebook.com.vn" alt="Hello" />
            <h1 className="post-title">C#(.NET) - Tương tác với file EXcel</h1>
            <p className="post-desc">Bạn có kiến thực ngôn ngữ C#</p>
            <p className="post-published">Một ngày trước</p>
        </div>
    </div>
);

function Img() {
    return (<img src="facebook.com.vn" alt="Hello" />);
}

function H1() {
    return (<h1 className="post-title">C#(.NET) - Tương tác với file EXcel</h1>);
}

function P_Tag() {
    return (
        <React.Fragment>
            <p className="post-desc">Bạn có kiến thực ngôn ngữ C#</p>
            <p className="post-published">Một ngày trước</p>
        </React.Fragment>
    );
};

function PostItem() {
    return (
        <div className="post-item">
            <Img />
            <H1 />
            <P_Tag />
        </div>
        
    )
}

const exc1 = (
    <div className="posts-list">
        <PostItem />
    </div>
);

ReactDOM.render(exc1, document.getElementById('root'));


