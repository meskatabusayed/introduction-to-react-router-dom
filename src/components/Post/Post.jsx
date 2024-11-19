import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id , title , body} = post;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Details</Link>
        </div>
    );
};

export default Post;