import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {userId , body} = post;
    return (
        <div>
            <h1>Details</h1>
            <h2>{userId}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;