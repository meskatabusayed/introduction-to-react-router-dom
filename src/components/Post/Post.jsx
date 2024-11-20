import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id , title , body} = post;
    const navigate = useNavigate()
    const handleShowDetails = () => {
        navigate(`/post/${id}`)

    }
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Details</Link>
            <button onClick={handleShowDetails}>See All Post Details</button>
        </div>
    );
};

export default Post;