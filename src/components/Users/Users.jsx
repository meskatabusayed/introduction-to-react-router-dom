import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css"

const Users = () => {
    const usersData = useLoaderData();
    return (
        <div>
            <h1>Users : {usersData.length}</h1>
            <p>Our All Users...</p>
            <div className="users">
                {
                    usersData?.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;