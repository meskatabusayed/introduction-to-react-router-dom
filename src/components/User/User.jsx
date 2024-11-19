import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id , name , email} = user;
    const userStyle = {
        border : "2px solid yellow",
        padding : "20px",
        
        borderRadius : "20px"
    }
    return (
        <div style={userStyle}>
            <p>Name : {name}</p>
            <p>Email : {email}</p> 
            <Link to={`/user/${id}`}>Details</Link>
        </div>
    );
};

export default User;