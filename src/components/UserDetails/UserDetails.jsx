import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {name , website , phone} = user;

    return (
        <div>
            <p>User Details : </p>
            <h3>{name}</h3>
            <h4>Website : {website}</h4>
            <h4>Phone : {phone}</h4>
        </div>
    );
};

export default UserDetails;